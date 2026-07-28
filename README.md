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

## v4.3 definitive layout

- Replaced Quarto's generated navbar with one custom bilingual header.
- Eliminated duplicate-logo generation at the source.
- Applied equal left and right gutters with a centred 1500 px canvas.
- Added a controlled smartphone/tablet hamburger menu.


## v4.4 final corrections
- Correct logo is selected before first paint; no English-logo flash in Urdu.
- Quarto page-grid side columns are disabled.
- Main canvas is centred and widened to a maximum of 1600 px with equal gutters.
- Header/navigation ordering is unchanged from v4.3.


## v4.5 mobile header correction

- Desktop layout is unchanged.
- Urdu mobile header places the menu button on the left and the logo on the right.
- English mobile header keeps the logo on the left and the menu button on the right.
- The Urdu/English switch is now visible at the top of the opened mobile menu.
