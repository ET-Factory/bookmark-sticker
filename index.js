const getCurrentURL = (event) => event.target.URL;

window.addEventListener("load", (event) => {
  const currentURL = getCurrentURL(event);
  const scrollPositionY = Number(window.localStorage.getItem(currentURL));

  if (scrollPositionY) {
    drawBookmark(scrollPositionY);
    window.scrollTo(0, scrollPositionY);
  }
});

window.addEventListener("unload", (event) => {
  const scrollPositionY = window.scrollY;
  const currentURL = getCurrentURL(event);
  window.localStorage.setItem(currentURL, scrollPositionY);
});

const drawBookmark = (scrollPositionY) => {
  const $body = window.document.querySelector("body");
  const $wrapper = document.createElement("div");

  $wrapper.style.display = "block";
  $wrapper.style.border = "10px solid blue";
  $wrapper.style.position = "absolute";
  $wrapper.style.top = `${scrollPositionY}px`;

  const $text = document.createElement("div");
  $text.innerHTML = `<h1>This is sticker</h1>`;

  $wrapper.appendChild($text);
  $body.appendChild($wrapper);
};
