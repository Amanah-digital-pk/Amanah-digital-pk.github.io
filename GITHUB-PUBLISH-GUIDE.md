# Publish Amanah Website and App to Your Existing GitHub Organization

Your existing organization is:

```text
Amanah-digital-pk
```

GitHub URLs are case-insensitive, but use this exact owner name in commands.

Recommended repositories:

```text
Amanah-digital-pk.github.io
app
```

Resulting public addresses:

```text
https://amanah-digital-pk.github.io/
https://amanah-digital-pk.github.io/app/
```

---

# 1. Confirm GitHub CLI login

```bash
gh auth status
```

If needed:

```bash
gh auth login
```

Choose:

```text
GitHub.com
HTTPS
Login with a web browser
```

---

# 2. Publish the corporate website

Enter the corrected website folder:

```bash
cd amanah-digital-website-v3.6-urdu
```

Test locally:

```bash
rm -rf _site .quarto
quarto preview
```

Confirm:

- English logo: `Amanah Digital`
- Urdu logo: mark on the right, large `أمانة`, small `ڈیجیٹل` underneath
- Urdu and English navigation work
- Privacy and Terms preserve the selected language

Stop preview:

```text
Ctrl+C
```

Render once:

```bash
quarto render
```

## Create the repository if it does not exist

Initialize Git:

```bash
git init
git branch -M main
git add .
git commit -m "Launch Amanah Digital website v3.6"
```

Create the organization repository and push:

```bash
gh repo create Amanah-digital-pk/Amanah-digital-pk.github.io \
  --public \
  --source=. \
  --remote=origin \
  --push
```

## If the repository already exists

Initialize locally only if needed:

```bash
git init
git branch -M main
```

Add the remote:

```bash
git remote add origin \
  https://github.com/Amanah-digital-pk/Amanah-digital-pk.github.io.git
```

If `origin` already exists:

```bash
git remote set-url origin \
  https://github.com/Amanah-digital-pk/Amanah-digital-pk.github.io.git
```

Commit and push:

```bash
git add -A
git commit -m "Upgrade Amanah website to v3.6"
git push -u origin main
```

If Git rejects the push because the remote contains an initial README:

```bash
git pull origin main --rebase
git push -u origin main
```

---

# 3. Enable GitHub Pages for the website

On GitHub:

```text
Amanah-digital-pk
→ Repositories
→ Amanah-digital-pk.github.io
→ Actions
```

Wait for:

```text
Publish Quarto website
```

Then open:

```text
Settings
→ Pages
```

Choose:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Click **Save**.

Your site will be:

```text
https://amanah-digital-pk.github.io/
```

---

# 4. Publish the Amanah app

Enter the app folder:

```bash
cd amanah-app-v3.4-urdu
```

Install and validate:

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Check:

- Urdu opens by default
- Urdu logo uses the corrected lockup
- English and Urdu switching works
- Desktop, tablet, and smartphone layouts work

Stop the development server:

```text
Ctrl+C
```

## Create the app repository if it does not exist

```bash
git init
git branch -M main
git add .
git commit -m "Launch Amanah app v3.4"
```

Create and push:

```bash
gh repo create Amanah-digital-pk/app \
  --public \
  --source=. \
  --remote=origin \
  --push
```

## If the app repository already exists

```bash
git init
git branch -M main
git remote add origin https://github.com/Amanah-digital-pk/app.git
git add -A
git commit -m "Upgrade Amanah app to v3.4"
git push -u origin main
```

If `origin` exists:

```bash
git remote set-url origin https://github.com/Amanah-digital-pk/app.git
```

If the remote contains an initial README:

```bash
git pull origin main --rebase
git push -u origin main
```

---

# 5. Enable GitHub Pages for the app

On GitHub:

```text
Amanah-digital-pk
→ Repositories
→ app
→ Settings
→ Pages
```

Select:

```text
Source: GitHub Actions
```

Then open:

```text
Actions
```

Wait for the app deployment workflow to complete.

The app will be available at:

```text
https://amanah-digital-pk.github.io/app/
```

---

# 6. Normal update commands

Website:

```bash
cd amanah-digital-website-v3.6-urdu
git add -A
git commit -m "Improve Amanah website"
git push
```

App:

```bash
cd amanah-app-v3.4-urdu
git add -A
git commit -m "Improve Amanah app"
git push
```

---

# 7. Verify published files

Website:

```bash
curl -I https://amanah-digital-pk.github.io/
```

Urdu logo:

```bash
curl -I https://amanah-digital-pk.github.io/assets/brand/amanah-navbar-ur.svg
```

App:

```bash
curl -I https://amanah-digital-pk.github.io/app/
```

A successful response should include:

```text
HTTP/2 200
```
