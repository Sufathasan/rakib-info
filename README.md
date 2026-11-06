# Rakib Info Portfolio

**Live Website:** [https://sufathasan.github.io/rakib-info/](https://sufathasan.github.io/rakib-info/)

**GitHub Repository:** [https://github.com/Sufathasan/rakib-info](https://github.com/Sufathasan/rakib-info)

A responsive editorial portfolio for graphic designer and branding specialist Kamrul Hassan Rakib. Built as a static website with HTML, CSS, and vanilla JavaScript; there is no build step or package dependency.

## Display and languages

The site includes a persistent light/dark theme switch and an in-page language selector for English, Bengali, Simplified Chinese, Traditional Chinese, Hindi, Arabic, Spanish, French, Japanese, and Portuguese. Language and theme preferences are stored independently in the browser. Arabic uses right-to-left text direction; project names, links, and supplied professional details remain unchanged.

## Run locally

Open `index.html` in a browser, or start a static server from this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Portfolio content and images

The portfolio includes all 28 project titles and their supplied Behance project links. Twenty-four publicly accessible Behance covers are stored locally in `assets/images/projects/`; the remaining four entries use typographic covers because a public cover image could not be verified. The supplied profile photograph is stored locally at `assets/images/profile/kamrul-hassan-rakib.jpg`, with `portrait-placeholder.svg` as a fallback.

Only the supplied designer details and public profile URLs are used. No employment history, email address, awards, clients, or availability claims are added.

## Deployment

`.github/workflows/deploy.yml` publishes the repository root to GitHub Pages on pushes to `main` and on manual workflow dispatch. GitHub Pages must be enabled for the repository with GitHub Actions as the deployment source.
