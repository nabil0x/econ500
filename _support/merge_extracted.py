#!/usr/bin/env python3
"""Merge extracted markdown files into docs/ alongside symlinks."""
import shutil, sys
from pathlib import Path

EXTRACTED = Path("extracted")
DOCS = Path("docs")
REPO = Path("..")

def merge():
    count = 0
    for md_path in EXTRACTED.rglob("*.md"):
        # Skip empty placeholder files
        if md_path.stat().st_size < 100:
            continue
        
        # Determine relative path from extracted/
        rel = md_path.relative_to(EXTRACTED)
        
        # Map: extracted/502_Macroeconomics/TEXTBOOKS/foo.md -> docs/extracted/502-Macroeconomics/TEXTBOOKS/foo.md
        # But symlinks already exist at docs/502-Macroeconomics -> ../502_Macroeconomics
        # So we put extracted content in docs/extracted-content/ to avoid conflicts
        dest = DOCS / "extracted-content" / rel
        
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(md_path, dest)
        count += 1
    
    print(f"Merged {count} extracted files into docs/extracted-content/")

if __name__ == "__main__":
    merge()
