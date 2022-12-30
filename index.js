const getCurrentURL = (event) => event.target.URL;

// 만료 시간과 함께 데이터를 저장
const setItemWithExpireTime = (keyName, keyValue, expireT) => {
  // localStorage에 저장할 객체
  const obj = {
    value: keyValue,
    expire: Date.now() + expireT,
  };

  // 객체를 JSON 문자열로 변환
  const objString = JSON.stringify(obj);

  // setItem
  window.localStorage.setItem(keyName, objString);
};

const getItemWithExpireTime = (keyName) => {
  // localStorage 값 읽기 (문자열)
  const objString = window.localStorage.getItem(keyName);
  console.log(objString);
  // null 체크
  if (!objString) {
    return null;
  }

  // 문자열을 객체로 변환
  const obj = JSON.parse(objString);
  console.log(obj.expire);
  console.log(obj.value);
  console.log(Date.now());

  // 현재 시간과 localStorage의 expire 시간 비교
  if (Date.now() > obj.expire) {
    // 만료시간이 지난 item 삭제
    window.localStorage.removeItem(keyName);

    // null 리턴
    return null;
  }

  // 만료기간이 남아있는 경우, value 값 리턴
  return obj.value;
};

window.addEventListener("load", (event) => {
  const currentURL = getCurrentURL(event);
  const scrollPositionY = Number(window.localStorage.getItem(currentURL));
  console.log("scrollPositionY", scrollPositionY);
  getItemWithExpireTime(currentURL);

  // sertimeout
  setTimeout(() => {
    console.log(
      "scrollPositionY",
      Number(window.localStorage.getItem(currentURL))
    );
  }, 3000);

  console.log(scrollPositionY);
  if (scrollPositionY) {
    drawBookmark(scrollPositionY);
    window.scrollTo(0, scrollPositionY);
  }
});

window.addEventListener("unload", (event) => {
  const scrollPositionY = window.scrollY;

  const currentURL = getCurrentURL(event);
  setItemWithExpireTime(currentURL, scrollPositionY, 1000);

  //window.localStorage.setItem(currentURL, scrollPositionY);
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
