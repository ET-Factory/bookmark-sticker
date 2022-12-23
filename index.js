let timer;
let time = 500;

const getCurrentURL = (event) => event.target.URL;

window.addEventListener("scroll", (event) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const y = window.scrollY;
    const currentURL = getCurrentURL(event);

    window.localStorage.setItem(currentURL, y);
  }, time);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const currentURL = getCurrentURL(event);
  const y = window.localStorage.getItem(currentURL);
  scrollTo(y);
});
