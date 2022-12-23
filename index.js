const getCurrentURL = (event) => event.target.URL;

window.addEventListener("load", (event) => {
  const currentURL = getCurrentURL(event);
  const scrollPositionY = Number(window.localStorage.getItem(currentURL));
  if (scrollPositionY) window.scrollTo(0, y);
});

window.addEventListener("unload", (event) => {
  const scrollPositionY = window.scrollY;
  const currentURL = getCurrentURL(event);
  window.localStorage.setItem(currentURL, scrollPositionY);
});
