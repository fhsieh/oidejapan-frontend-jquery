Oide Japan Frontend (jQuery)
============

Front-end UI/UX demo for Oide Japan using jQuery and Susy/Sass.

![Translation interface](https://user-images.githubusercontent.com/9514732/32267512-db61d84a-bf2e-11e7-81a7-3a088f662f9c.gif)

Static UI/UX demo for the "New Translation" view of Oide Japan service. Header (notofication and profile dropdowns), Sidebar, Helpbar, and Translation wizard components are defined in `js` and loaded individually into `index.html` with sample static content.

![Main interface](https://user-images.githubusercontent.com/9514732/32267514-deae5a8c-bf2e-11e7-85ce-cf971fdd0642.gif)

Content and routing is intended to be handled on backend by server-side views (traditional Rails, Laravel, etc) with JS/CSS components compiled server-side into asset pipeline.

Layout provided by Susy/Sass in `scss` and compiled using Gulp toolchain.

---

### Running

1. Clone this repo
2. Open `index.html` in your browser

### Compiling Susy/Sass

1. `npm install`
2. `npm install -g gulp` if you don't have Gulp installed
3. `gulp sass`
