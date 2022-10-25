
# Motorway UI Test


Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.


## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

- I decided to make use of both flex and grid in order to demonstrate my knowledge of CSS. Usually I have had experience with CSS-In-JS frameworks but after reading this article:
https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b I decided to try and use scss Modules instead.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.
- In regards to the images I decided to make use of the .webp version as this is a more optimised file format. Previously when working with images I have used CDN services provided by imgix or fastly in order to further optimise and massively reduce file size as this can have a massive impact on CWV particularly LCP.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters


### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.

- Decided to create a fetching hook with some very basic caching logic. The idea being that when it has been fetched we would store it in a cache and it will always check there before hitting the API.
    - To make this more production ready it could easily be extended to use something a bit more robust such as localStorage. Previously in regards to slow APIs I have improved them by adding caching and making use of Redis.
    - When the Cache was hit images were returned in 0.103ms.
- Use of `console.time()` and `console.timeEnd()` in order to log performance in production we could use a combination of tracing and prometheus metrics as a means to find bottle necks within the app. These could then be plotted on Graphs to alert on if necessary.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)

- I decided to make use of react hook forms as its a very light weight package (9kb when minified and gzipped) plus is 45% smaller than popular libraries such as formik. I feel the DevX improvements this brings outweighs the cost of bundling this package in the app.


## Further improvements
if I had more time I would:
- Implement lazy loading for any images that appear below the fold which would benefit LCP
- Make use of the status field implemented in the use-fetch hook to show a skeleton state for the User Card when being fetched. This would benefit CLS and inform users that something is happening.


Please test on Chrome.

## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
