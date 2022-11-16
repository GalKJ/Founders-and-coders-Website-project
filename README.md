# Founders-and-coders-Website-project

## Website project built for application to the Founders & Coders pre-apprenticeship program.

The website tells the user a little about me as a developer and shows off some of the skills I have learnt so far. 

The site can be viewed here 

## Website section approach

I wanted to chop the website into distinct sections and decided to do that using a `min-width: 100vh;`. This way I would be able to keep the sections of the website clear.

I used the setTimeout API to make the page dynamic from page load.

## Carousel to show past projects and feature for Founders and Coders application.

This was a good challenge and although I was learning from a tutorial some things had to be changed in order to achieve a correct layout at first. I paused step by step to make sure I was clear with what the code meant and now I can create a carousel when i need one. Superb!

## Responsive design bug with carousel and Etch-a-sketch

I have discovered a bug which causes the layout of the page to not respond when pixel width falls below around 300px. Although I currently don't have time to fix this bug before the deadline i have some theories.

- My canvas, carousel container and images must have implicit not explicit widths.
- My javascript code does not cater for responsive design and must be refactored.
- My grid template syntax is not correct.

## Starting carousel image bug

On first page load the carousel slide sometimes begins with the image tagged as `id="last-clone"` and this breaks the functionality of the carousel. The carousel works once the page has been reloaded. This behaviour could have something to do with cache but will need further investigation and debugging.
