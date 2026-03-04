

## Plan: Add Light Mode with White Background as Default

Currently the site is dark-only with hardcoded dark CSS variables. The project already has `next-themes` installed and `darkMode: ["class"]` in tailwind config.

### Changes

1. **`src/index.css`** — Add light mode `:root` variables (white background, dark text) and move current dark values under `.dark`

2. **`src/App.tsx`** — Wrap the app in `<ThemeProvider>` from `next-themes` with `defaultTheme="light"`

3. **`src/pages/Index.tsx`** — Remove `invert` class from logo images (won't be needed if logo works on both backgrounds, or make it conditional). Add a theme toggle button in the nav.

4. **`tailwind.config.ts`** — Already has `darkMode: ["class"]`, no changes needed.

### CSS Variable Split

**Light (default `:root`):**
- `--background: 0 0% 100%` (white)
- `--foreground: 0 0% 4%` (near black)
- `--card: 0 0% 97%`
- `--border: 0 0% 88%`
- `--muted: 0 0% 94%`
- `--muted-foreground: 0 0% 40%`
- Accent gold stays the same

**Dark (`.dark`):**
- Current values moved here unchanged

### Theme Toggle
- Small Sun/Moon icon button in the navbar to switch between light and dark mode.

