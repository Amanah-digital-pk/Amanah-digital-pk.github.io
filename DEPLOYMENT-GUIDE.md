# Amanah GitHub Deployment Guide

This release contains two separate projects:

1. Corporate website: `amanah-digital-website-v3.5-urdu`
2. Web/PWA app: `amanah-app-v3.3-urdu`

Recommended repositories:

- Organisation website: `amanah-digital-pk.github.io`
- Application: `app`

Resulting URLs:

- Website: `https://amanah-digital-pk.github.io/`
- App: `https://amanah-digital-pk.github.io/app/`

---

## A. Test the corporate website

```bash
cd amanah-digital-website-v3.5-urdu
rm -rf _site .quarto
quarto preview
```

Confirm:

- English logo appears in English.
- `أمانة ڈیجیٹل` logo appears in Urdu.
- No 404 errors appear for `amanah-navbar-ur.svg`.
- Navbar remains on one line on desktop.
- Mobile navbar collapses normally.
- Privacy and Terms retain the selected language.

Stop preview:

```text
Ctrl+C
```

Render once:

```bash
quarto render
```

---

## B. Commit and publish the corporate website

Create the Git repository:

```bash
cd amanah-digital-website-v3.5-urdu
git init
git branch -M main
git add .
git commit -m "Launch Amanah Digital website v3.5"
```

Create and push the GitHub repository:

```bash
gh auth status
gh repo create amanah-digital-pk/amanah-digital-pk.github.io \
  --public \
  --source=. \
  --remote=origin \
  --push
```

If the repository already exists:

```bash
git remote add origin \
  https://github.com/amanah-digital-pk/amanah-digital-pk.github.io.git

git push -u origin main
```

In GitHub:

1. Open the repository.
2. Select **Actions**.
3. Wait for **Publish Quarto website** to succeed.
4. Open **Settings → Pages**.
5. Select:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/(root)**
6. Save.

Open:

```text
https://amanah-digital-pk.github.io/
```

---

## C. Test the app

```bash
cd amanah-app-v3.3-urdu
npm install
npm run typecheck
npm run build
npm run dev
```

Open the Vite address shown in the terminal.

Confirm:

- Urdu opens by default.
- Urdu logo reads `أمانة ڈیجیٹل`.
- English logo reads `Amanah Digital`.
- Language choice is remembered.
- Layout works on desktop, tablet and smartphone widths.

Stop development server:

```text
Ctrl+C
```

---

## D. Commit and publish the app

```bash
cd amanah-app-v3.3-urdu
git init
git branch -M main
git add .
git commit -m "Launch Amanah app v3.3"
```

Create the app repository:

```bash
gh repo create amanah-digital-pk/app \
  --public \
  --source=. \
  --remote=origin \
  --push
```

If the repository already exists:

```bash
git remote add origin \
  https://github.com/amanah-digital-pk/app.git

git push -u origin main
```

In GitHub:

1. Open the `app` repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Open **Actions** and wait for **Deploy Amanah app**.
5. Visit:

```text
https://amanah-digital-pk.github.io/app/
```

---

## E. Normal update workflow

Website:

```bash
git add .
git commit -m "Improve Amanah website"
git push
```

App:

```bash
git add .
git commit -m "Improve Amanah app"
git push
```

GitHub Actions republishes each project automatically.

---

## F. If a repository already has an older release

Inside the existing repository:

```bash
git status
git branch --show-current
```

Back up local uncommitted work before replacing files.

Copy the new project files into the repository, excluding `.git`, then run:

```bash
rm -rf _site .quarto dist
git add -A
git commit -m "Upgrade to Amanah website v3.5"
git push
```

For the app, use:

```bash
rm -rf dist
npm install
npm run typecheck
npm run build
git add -A
git commit -m "Upgrade to Amanah app v3.3"
git push
```
