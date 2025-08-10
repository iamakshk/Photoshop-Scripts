# ChangeTextCase — by @iamakshk

**A small, powerful Photoshop script to change text case with precision.**  
Change single occurrences or navigate through every match across all text layers — fast, non-destructive workflow improvements for designers.

> Built by **Akshay Kinjawadekar (@iamakshk)** — Adobe Certified • Senior Graphic Artist

---

## 🚀 Features
- Change case to **UPPERCASE**, **lowercase**, **Title Case**, or **Sentence case**.
- **Search a word/phrase** and jump through matches across **all text layers** (Next / Change workflow).
- **Single-occurrence edits** — change only the selected match; other occurrences remain untouched.
- **Temporary preview** inside the dialog (simulated highlight) so you can confirm before changing.
- Compatible with Photoshop **CS6 → Photoshop 2025** (uses standard ExtendScript APIs).
- Minimal, modern dialog UI for a clean designer workflow.

---

## 📂 Files
- `ChangeTextCase_by_iamakshk.jsx` — main script (place in your Photoshop Scripts folder or run via `File → Scripts → Browse…`).
- `README.md` — this file.

---

## 🛠 Installation

### Option A — Quick (one-time run)
1. Download `ChangeTextCase_by_iamakshk.jsx`.
2. In Photoshop: **File → Scripts → Browse…** → select the `.jsx` file.

### Option B — Persistent (makes it appear under `File → Scripts`)
**Windows**
- Copy to:
  ```
  C:\Program Files\Adobe\Adobe Photoshop <version>\Presets\Scripts\
  ```
**macOS**
- Copy to:
  ```
  /Applications/Adobe Photoshop <version>/Presets/Scripts/
  ```
- Restart Photoshop. The script will appear under **File → Scripts**.

---

## ▶️ How to use (quick)
1. Open a document containing text layers.
2. Run the script.
3. In the dialog:
   - Choose the case type (UPPERCASE / lowercase / Title Case / Sentence case).
   - Enter the search word/phrase.
   - Click **Search** — script searches all text layers and lists matches.
   - Click **Next** to jump to the next match (preview shown in the dialog).
   - Click **Change** to convert ONLY the current match.
   - Repeat **Next** → **Change** as needed.
4. Click **Close** when done.

---

## ✅ Notes & Limitations
- The preview "highlight" inside the dialog is a **simulated, temporary preview** (non-destructive). The script does **not** permanently change text color unless you press **Change**.
- Complex text layer behaviors (rich text with varied character styles) may impose edge-cases. The script uses string-based replacement using index/length which works reliably for common text layers.
- Paragraph vs. Point text: script operates on `textItem.contents`. Extremely complex text compositions (linked text frames or special native text selections) can behave differently.
- Always keep a saved copy of your PSD before running bulk automated edits (best practice for any automation).

---

## 🔧 Troubleshooting
- **No matches found** — ensure your search term is correct (case-insensitive search is performed). If you used regex-special characters, escape them or use plain text.
- **Selected layer is not a text layer** — switch to a text layer or use a document with text layers.
- **Script doesn’t appear in File → Scripts** — confirm you placed the `.jsx` in the Presets/Scripts folder and restarted Photoshop.

---

## 💼 License
This project is released under the **MIT License**. See `LICENSE` for details.

---

## 🧾 Changelog
- **v1.0** — Initial release: All layers search, Next/Change single-occurrence workflow, dialog preview.
- (Future) — Add preferences, keyboard shortcuts, enhanced selection preview.


---

## 🙏 Credits
Built by **Akshay Kinjawadekar (@iamakshk)** — Adobe Certified, Senior Graphic Artist.

---


## 📄 License File Example (MIT)
```
MIT License

Copyright (c) 2025 Akshay Kinjawadekar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
