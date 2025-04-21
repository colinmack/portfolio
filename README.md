# Portfolio

This is my personal portfolio website, built to showcase my projects, skills, and personality as a front-end developer. It's designed with a clean, responsive layout and includes some subtle animations and interactivity to bring it to life. The site is built using HTML, CSS, and JavaScript.

## Features

- A starfield canvas background animation on the homepage, built using JavaScript and confined to the `.home` section to avoid performance issues elsewhere on the site.
- A fully responsive design using CSS media queries for mobile, tablet, and desktop screen sizes.
- An animated laptop opening effect built entirely with HTML and CSS, using no images — just pure code. This adds a personal touch and gives the intro section a bit of character.
- A smooth-scrolling navigation menu that lets users jump between sections easily.
- A project showcase grid with magnifying glass icons that open lightboxes containing more information about each project.
- A skills section displaying the main technologies and tools I work with.

## How does it work?

The homepage features a canvas element with a starfield animation written in JavaScript. It creates the illusion of moving stars in space and adds a bit of visual flair to the hero section. This canvas is scoped specifically to the `.home` section so that it doesn't interfere with other content or affect performance on mobile devices.

The laptop animation is made entirely with HTML and CSS — it doesn't use any images or external libraries. It's built using `div` elements styled and transformed to resemble the different parts of a laptop (screen, base, hinge, etc.), and animated to appear as if it's opening on page load. This effect is subtle but gives the landing section a bit of extra polish and uniqueness.

The portfolio section displays a grid of project thumbnails. Each one includes a magnifying glass icon that, when clicked, triggers a lightbox. This lightbox overlays the screen and contains details about the project, built using JavaScript to manage the modal display logic.

The site is built mobile-first, using CSS flexbox and media queries to adjust layout and spacing across breakpoints. This ensures the content remains readable and accessible on all screen sizes.

## Comments

This portfolio represents my style as a front-end developer — clean, responsive, and interactive without being overwhelming. The laptop animation and starfield background are subtle touches that reflect my attention to detail and ability to build engaging UI with just code. The site is easy to update and scale as my portfolio grows.

## View site

[https://www.colinmack.tech](https://www.colinmack.tech)
