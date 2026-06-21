#!/usr/bin/env python3
"""Remove stray `>` lines that are artifacts from admonition conversion.

A stray `>` is a standalone blockquote marker that was originally a blank
separator between two parts of a single `>` block (e.g. Marking Guide + High-Yield
in the same blockquote). After splitting into admonitions, the blank `>` is no
longer adjacent to other `>` lines, so it's an artifact.

Rule: a line that is exactly `>` is an artifact if NEITHER its immediate
previous nor next line starts with `>`.  Legitimate `>` lines are always
inside a continuous blockquote (> ... > > ...).
"""
import re
from pathlib import Path

DIR = Path("/mnt/work/Masters/500/501-Microeconomics")
FILES = ["answers-consumer-theory.md", "answers-demand-production.md"]

for fname in FILES:
    fpath = DIR / fname
    text = fpath.read_text(encoding="utf-8")
    lines = text.split("\n")
    out = []
    n = len(lines)
    removed = 0

    for i, line in enumerate(lines):
        if line == ">":
            prev = lines[i - 1] if i > 0 else ""
            nxt = lines[i + 1] if i < n - 1 else ""
            # If neither neighbor starts with '>', it's a stray artifact
            if not prev.startswith(">") and not nxt.startswith(">"):
                removed += 1
                continue  # skip it
        out.append(line)

    if removed:
        fpath.write_text("\n".join(out), encoding="utf-8")
        print(f"{fname}: removed {removed} stray `>` lines")
    else:
        print(f"{fname}: unchanged")
