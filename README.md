oidejapan-frontend-jquery
============

Front-end UI/UX test for Oide Japan using jQuery and Susy/Sass.

Static UI/UX demo for the New Translation view of Oide Japan service. Header (notofication/profile dropdowns), Sidebar, Helpbar, and Translation wizard components are defined in `js` and loaded individually into `index.html` with sample static content.

Layout provided by Susy/Sass in `scss` and compiled using Gulp toolchain.

Content and routing to be handled on backend by server-side views (traditional Rails, Laravel, etc) with JS/CSS components compiled server-side into asset pipeline.

---

### Running

1. Clone this repo from `https://github.com/fhsieh/oidejapan-frontend-jquery.git`
2. Run `npm install`
3. (Optional) Run `gulp sass` to compile Susy/Sass to `css/global.css` (run `npm install -g gulp` if Gulp is not installed)
4. Load `index.html` in browser.
