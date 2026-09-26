# Editing Mengqi Zhang's homepage

The homepage, publication list, and CV page use the `academic` Jekyll layout. The design follows the restrained typography, warm background, and image-and-text publication rows of https://nuuuh.github.io/.

## Content

- `_data/research.json`: research interests, publication metadata and links, news, experience, education, and service. Shared by all three pages.
- `_pages/about.md`: homepage structure and Point2GS project.
- `_pages/publications.html`: complete publication list with topic filters.
- `_pages/cv.md`: web CV.
- `files/Mengqi_Zhang_CV.pdf`: downloadable CV, compiled from the current resume source.

Publication images are in `images/`. The DeVA video comes from the public DeVA project page; research figures come from the corresponding project pages or papers. Existing project subsites, including `HOIDiffusion/`, are preserved.

## Appearance

- `_layouts/academic.html`: navigation, document metadata, and footer.
- `_includes/academic-*.html`: shared sections.
- `assets/css/academic.css`: typography, color, spacing, and responsive layouts.
- `assets/js/academic.js`: theme switch, publication filters, and video dialog.

## Preview and publish

This remains a Jekyll/GitHub Pages site. With the repository's Ruby dependencies installed, run `bundle exec jekyll serve` and visit the local address it prints. GitHub Pages will render the source pages after these files are committed to the website repository.

Do not commit standalone HTML files generated just for a temporary preview at `index.html`, `publications/index.html`, or `cv/index.html`: the source pages above own those routes.

The homepage and web CV share the same Amazon/Hillbot experience entries and Academic Service include. Honors & Awards is omitted from both pages.
