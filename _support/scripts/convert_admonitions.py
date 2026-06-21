#!/usr/bin/env python3
"""
Convert answer file blockquote patterns to MkDocs Material admonitions.

Patterns (in order of precedence within a single > block):
  1. **Marking Guide [N marks]:** content      →  !!! tip "Marking Guide"
  2. ⭐ **High-Yield** — content                →  !!! success "High-Yield"
  3. **Formal Definition N — Title**            →  !!! quote "Formal Definition N — Title"
     (multi-line block, possibly multiple PDs)

Combined blocks (MG + HY in same >) are split into separate admonitions.
Multiple Formal Definitions in a single > block are split.
"""

import re
import sys
from pathlib import Path

ANSWER_DIR = Path("/mnt/work/Masters/500/501-Microeconomics")
FILES = [
    "answers-consumer-theory.md",
    "answers-demand-production.md",
    "answers-welfare.md",
    "answers-ge-game-extern-trade.md",
]

# **Marking Guide [N marks]:** rest-of-line
MG_RE = re.compile(r'^\*\*Marking Guide \[(\d+)\s*marks?\]\s*:\*\*(.*)$')

# ⭐ **High-Yield** — content (or ⭐**High-Yield**—content)
HY_RE = re.compile(r'^⭐\s*\*\*High-Yield\*\*[\s—–-]*(.*)$')

# Any line starting "**Formal Definition N ..."
FD_START = re.compile(r'^\*\*Formal Definition (\d+)')


def _extract_fd_title(line: str) -> str | None:
    """Extract a clean admonition title from a Formal Definition header line."""
    s = line.strip()
    if not s.startswith('**Formal Definition '):
        return None
    # Strip outer **...**
    inner = s[2:-2] if s.endswith('**') else s[2:]
    # Normalise dash to em-dash
    inner = re.sub(r'[—–-]+', ' — ', inner, count=1)
    # Remove all markdown links: [Text](url) → Text
    inner = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', inner)
    # Collapse whitespace
    inner = re.sub(r'\s+', ' ', inner).strip()
    return inner


def split_blockquote_into_admonitions(bq_lines: list[str]):
    """
    Given blockquote lines with '> ' already stripped, scan for convertible
    patterns and return a list of (type, title, body_lines).

    Returns None if the block has NO convertible content.
    """
    if not bq_lines:
        return None

    result = []
    i = 0
    n = len(bq_lines)
    found_any = False

    while i < n:
        raw = bq_lines[i]
        stripped = raw.strip()

        # ── Marking Guide ──
        m = MG_RE.match(stripped)
        if m:
            found_any = True
            result.append(('mg', m.group(2).strip(), []))
            i += 1
            continue

        # ── High-Yield ──
        m = HY_RE.match(stripped)
        if m:
            found_any = True
            result.append(('hy', m.group(1).strip(), []))
            i += 1
            continue

        # ── Formal Definition ──
        if FD_START.match(stripped):
            found_any = True
            title = _extract_fd_title(stripped) or stripped.replace('**', '').strip()
            body = []
            i += 1
            while i < n:
                ns = bq_lines[i].strip()
                if FD_START.match(ns):
                    break
                body.append(bq_lines[i])
                i += 1
            # Strip trailing blanks
            while body and not body[-1].strip():
                body.pop()
            result.append(('fd', title, body))
            continue

        # ── Non-matching line (blank, regular text, etc.) ──
        if not found_any:
            # If we haven't found any pattern yet, this could be leading content.
            # Scan ahead — if there's a pattern later, skip this line silently.
            has_pattern_ahead = any(
                MG_RE.match(bq_lines[j].strip()) or
                HY_RE.match(bq_lines[j].strip()) or
                FD_START.match(bq_lines[j].strip())
                for j in range(i, n)
            )
            if not has_pattern_ahead:
                return None  # No convertible content in entire block

        i += 1

    if not found_any:
        return None
    return result

def convert_file(filepath):
    """Process a single answer file and return the converted content."""
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    lines = text.split('\n')
    output = []
    i = 0
    in_code_fence = False

    while i < len(lines):
        line = lines[i]

        # Track code fences
        if line.strip().startswith('```') or line.strip().startswith('~~~'):
            output.append(line)
            in_code_fence = not in_code_fence
            i += 1
            continue

        if in_code_fence:
            output.append(line)
            i += 1
            continue

        # Check if we're entering a blockquote section
        if line.startswith('> '):
            # Collect all consecutive blockquote lines
            bq_lines = []
            while i < len(lines) and (lines[i].startswith('> ') or lines[i] == '>'):
                # Strip the '> ' or '>' prefix (keep the rest)
                if lines[i].startswith('> '):
                    bq_lines.append(lines[i][2:])
                elif lines[i] == '>':
                    bq_lines.append('')
                i += 1

            # Process the blockquote
            result = split_blockquote_into_admonitions(bq_lines)

            if result is None:
                # No convertible pattern - output as-is
                for bl in bq_lines:
                    if bl == '':
                        output.append('>')
                    else:
                        output.append(f'> {bl}')
                continue

            # Convert to admonitions
            for item in result:
                typ, title, body = item
                if typ is None:
                    # No conversion, output as-is
                    for bl in body if body else [title]:
                        if isinstance(bl, str):
                            if bl == '':
                                output.append('>')
                            else:
                                output.append(f'> {bl}')
                        else:
                            output.append(f'> {bl}')
                    continue

                if typ == 'mg':
                    output.append(f'!!! tip "Marking Guide"')
                    if title:
                        output.append(f'    {title}')
                    for bl in body:
                        output.append(f'    {bl}')

                elif typ == 'hy':
                    output.append(f'!!! success "High-Yield"')
                    if title:
                        output.append(f'    {title}')
                    for bl in body:
                        output.append(f'    {bl}')

                elif typ == 'fd':
                    output.append(f'!!! quote "{title}"')
                    for bl in body:
                        stripped_bl = bl.strip()
                        if stripped_bl.startswith('→ *See also:'):
                            output.append(f'    {stripped_bl}')
                        else:
                            output.append(f'    {bl}')

            continue

        # Not in a blockquote - check for bare High-Yield lines (not in >)
        hy_match = HY_RE.match(line.strip())
        if hy_match:
            content = hy_match.group(1).strip()
            output.append(f'!!! success "High-Yield"')
            output.append(f'    {content}')
            i += 1
            continue

        output.append(line)
        i += 1

    return '\n'.join(output)

def main():
    for fname in FILES:
        fpath = ANSWER_DIR / fname
        print(f"Processing {fname}...", file=sys.stderr)
        result = convert_file(str(fpath))
        # Write back
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(result)
        print(f"  Done.", file=sys.stderr)

if __name__ == '__main__':
    main()
