let timer;
let time = 500;

window.addEventListener("scroll", (event) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const y = window.scrollY;
    const currentURL = event.target.URL;
    console.log({ currentURL });
  }, time);
});
