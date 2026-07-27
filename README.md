# Amanah Digital Website v3

A responsive Quarto corporate website for Amanah Digital, ready for GitHub Pages.

## Preview locally

```bash
quarto preview
```

## Render

```bash
quarto render
```

## GitHub Pages repository

Recommended organization:

```text
amanah-digital-pk
```

Recommended repository:

```text
amanah-digital-pk.github.io
```

## Publish

```bash
git init
git branch -M main
git add .
git commit -m "Launch Amanah Digital Website v3"

gh repo create amanah-digital-pk/amanah-digital-pk.github.io   --public   --source=.   --remote=origin   --push
```

Then open the repository's **Settings → Pages** and select the `gh-pages` branch after the workflow succeeds.

## App link

The website points to:

```text
https://amanah-digital-pk.github.io/app/
```

Change this in `_quarto.yml` and the `.qmd` files if the application is hosted elsewhere.


## v3.3 changes

- Fixed Urdu footer overlap with a stable three-zone desktop grid and single-column mobile footer.
- Added complete bilingual Privacy and Terms pages.
- Added precise explanations of identity verification, data use, fees, complaints, safety, and account restrictions.
- Added a worker-first business model for people with no digital work history, limited literacy, or limited smartphone experience.
- Added assisted onboarding, voice/visual guidance, transparent training, staged trust building, and accountability for both households and professionals.


## v3.4 changes

- Added compact English and Urdu navbar logos with tight SVG viewBoxes.
- Urdu brand rendering now uses `امانت ڈیجیٹل`.
- Replaced `سابق مالک` with respectful `سابق گھرانہ یا ادارہ`.
- Expanded digital-support wording to smartphones, bank accounts, Easypaisa, and JazzCash.
- Removed the Urdu-to-English flash on Privacy and Terms pages.
- Increased the actual visible logo size across desktop, tablet, and mobile.


## v3.6
- Corrected the Urdu logo lockup: mark on the right, large `أمانة`, and smaller `ڈیجیٹل` underneath.


## Final v3.7 naming rule

Every prominent branded label begins with:

- Urdu: `أمانة`
- English: `Amanah`

Short navigation labels remain concise for usability.
