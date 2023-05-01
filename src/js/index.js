let currentLang = "ENG"; //TODO Get language from OS
let capsLock = false;
let shift = false;
let position = 0;

const page = document.querySelector("body");
page.className = "page";

// Create keys set

const engKeys = [
  { lowerCase: "`", upperCase: "~" },
  { lowerCase: "1", upperCase: "!" },
  { lowerCase: "2", upperCase: "@" },
  { lowerCase: "3", upperCase: "#" },
  { lowerCase: "4", upperCase: "$" },
  { lowerCase: "5", upperCase: "%" },
  { lowerCase: "6", upperCase: "^" },
  { lowerCase: "7", upperCase: "&" },
  { lowerCase: "8", upperCase: "*" },
  { lowerCase: "9", upperCase: "(" },
  { lowerCase: "0", upperCase: ")" },
  { lowerCase: "-", upperCase: "_" },
  { lowerCase: "=", upperCase: "+" },
  { lowerCase: "Backspace", upperCase: "Backspace" },
  { lowerCase: "Tab", upperCase: "Tab" },
  { lowerCase: "q", upperCase: "Q" },
  { lowerCase: "w", upperCase: "W" },
  { lowerCase: "e", upperCase: "E" },
  { lowerCase: "r", upperCase: "R" },
  { lowerCase: "t", upperCase: "T" },
  { lowerCase: "y", upperCase: "Y" },
  { lowerCase: "u", upperCase: "U" },
  { lowerCase: "i", upperCase: "I" },
  { lowerCase: "o", upperCase: "O" },
  { lowerCase: "p", upperCase: "P" },
  { lowerCase: "[", upperCase: "{" },
  { lowerCase: "]", upperCase: "}," },
  { lowerCase: "\\", upperCase: "|" },
  { lowerCase: "Del", upperCase: "Del" },
  { lowerCase: "CapsLock", upperCase: "CapsLock" },
  { lowerCase: "a", upperCase: "A" },
  { lowerCase: "s", upperCase: "S" },
  { lowerCase: "d", upperCase: "D" },
  { lowerCase: "f", upperCase: "F" },
  { lowerCase: "g", upperCase: "G" },
  { lowerCase: "h", upperCase: "H" },
  { lowerCase: "j", upperCase: "J" },
  { lowerCase: "k", upperCase: "K" },
  { lowerCase: "l", upperCase: "L" },
  { lowerCase: ";", upperCase: ":" },
  { lowerCase: "'", upperCase: '"' },
  { lowerCase: "Enter", upperCase: "Enter" },
  { lowerCase: "Shift", upperCase: "Shift" },
  { lowerCase: "z", upperCase: "Z" },
  { lowerCase: "x", upperCase: "X" },
  { lowerCase: "c", upperCase: "C" },
  { lowerCase: "v", upperCase: "V" },
  { lowerCase: "b", upperCase: "B" },
  { lowerCase: "n", upperCase: "N" },
  { lowerCase: "m", upperCase: "M" },
  { lowerCase: ",", upperCase: "<" },
  { lowerCase: ".", upperCase: ">" },
  { lowerCase: "/", upperCase: "?" },
  { lowerCase: "▲", upperCase: "▲" },
  { lowerCase: "Shift", upperCase: "Shift" },
  { lowerCase: "Ctrl", upperCase: "Ctrl" },
  { lowerCase: "Win", upperCase: "Win" },
  { lowerCase: "Alt", upperCase: "Alt" },
  { lowerCase: " ", upperCase: " " },
  { lowerCase: "Alt", upperCase: "Alt" },
  { lowerCase: "◄", upperCase: "◄" },
  { lowerCase: "▼", upperCase: "▼" },
  { lowerCase: "►", upperCase: "►" },
  { lowerCase: "Ctrl", upperCase: "Ctrl" },
];

const rusKeys = [
  { lowerCase: "ё", upperCase: "Ё" },
  { lowerCase: "1", upperCase: "!" },
  { lowerCase: "2", upperCase: '"' },
  { lowerCase: "3", upperCase: "№" },
  { lowerCase: "4", upperCase: ";" },
  { lowerCase: "5", upperCase: "%" },
  { lowerCase: "6", upperCase: ":" },
  { lowerCase: "7", upperCase: "?" },
  { lowerCase: "8", upperCase: "*" },
  { lowerCase: "9", upperCase: "(" },
  { lowerCase: "0", upperCase: ")" },
  { lowerCase: "-", upperCase: "_" },
  { lowerCase: "=", upperCase: "+" },
  { lowerCase: "Backspace", upperCase: "Backspace" },
  { lowerCase: "Tab", upperCase: "Tab" },
  { lowerCase: "й", upperCase: "Й" },
  { lowerCase: "ц", upperCase: "Ц" },
  { lowerCase: "у", upperCase: "У" },
  { lowerCase: "к", upperCase: "К" },
  { lowerCase: "е", upperCase: "Е" },
  { lowerCase: "н", upperCase: "Н" },
  { lowerCase: "г", upperCase: "Г" },
  { lowerCase: "ш", upperCase: "Ш" },
  { lowerCase: "щ", upperCase: "Щ" },
  { lowerCase: "з", upperCase: "З" },
  { lowerCase: "х", upperCase: "х" },
  { lowerCase: "ъ", upperCase: "Ъ" },
  { lowerCase: "\\", upperCase: "/" },
  { lowerCase: "Del", upperCase: "Del" },
  { lowerCase: "CapsLock", upperCase: "CapsLock" },
  { lowerCase: "ф", upperCase: "Ф" },
  { lowerCase: "ы", upperCase: "Ы" },
  { lowerCase: "в", upperCase: "В" },
  { lowerCase: "а", upperCase: "А" },
  { lowerCase: "п", upperCase: "П" },
  { lowerCase: "р", upperCase: "Р" },
  { lowerCase: "о", upperCase: "О" },
  { lowerCase: "л", upperCase: "Л" },
  { lowerCase: "д", upperCase: "Д" },
  { lowerCase: "ж", upperCase: "Ж" },
  { lowerCase: "э", upperCase: "Э" },
  { lowerCase: "Enter", upperCase: "Enter" },
  { lowerCase: "Shift", upperCase: "Shift" },
  { lowerCase: "я", upperCase: "Я" },
  { lowerCase: "ч", upperCase: "Ч" },
  { lowerCase: "с", upperCase: "С" },
  { lowerCase: "м", upperCase: "М" },
  { lowerCase: "и", upperCase: "И" },
  { lowerCase: "т", upperCase: "Т" },
  { lowerCase: "ь", upperCase: "Ь" },
  { lowerCase: "б", upperCase: "Б" },
  { lowerCase: "ю", upperCase: "Ю" },
  { lowerCase: ".", upperCase: "," },
  { lowerCase: "▲", upperCase: "▲" },
  { lowerCase: "Shift", upperCase: "Shift" },
  { lowerCase: "Ctrl", upperCase: "Ctrl" },
  { lowerCase: "Win", upperCase: "Win" },
  { lowerCase: "Alt", upperCase: "Alt" },
  { lowerCase: " ", upperCase: " " },
  { lowerCase: "Alt", upperCase: "Alt" },
  { lowerCase: "◄", upperCase: "◄" },
  { lowerCase: "▼", upperCase: "▼" },
  { lowerCase: "►", upperCase: "►" },
  { lowerCase: "Ctrl", upperCase: "Ctrl" },
];

let keysFirstRow = [];
const firstRowKeysAmount = [1, 14];
let keysSecondRow = [];
const secondRowKeysAmount = [15, 29];
let keysThirdRow = [];
const thirdRowKeysAmount = [30, 42];
let keysFourthRow = [];
const fourthRowKeysAmount = [43, 55];
let keysFifthRow = [];
const fifthRowKeysAmount = [56, 64];

function getKeys(lang) {
  if (lang == "RUS") {
    keysFirstRow = setRow(rusKeys, firstRowKeysAmount);
    keysSecondRow = setRow(rusKeys, secondRowKeysAmount);
    keysThirdRow = setRow(rusKeys, thirdRowKeysAmount);
    keysFourthRow = setRow(rusKeys, fourthRowKeysAmount);
    keysFifthRow = setRow(rusKeys, fifthRowKeysAmount);
  } else if (lang == "ENG") {
    keysFirstRow = setRow(engKeys, firstRowKeysAmount);
    keysSecondRow = setRow(engKeys, secondRowKeysAmount);
    keysThirdRow = setRow(engKeys, thirdRowKeysAmount);
    keysFourthRow = setRow(engKeys, fourthRowKeysAmount);
    keysFifthRow = setRow(engKeys, fifthRowKeysAmount);
  }
}

function setRow(keys, rowChars) {
  return keys.slice(rowChars[0] - 1, rowChars[1]);
}

getKeys(currentLang);

// Create initial layout

const title = document.createElement("h1");
title.className = "title";
title.textContent = "RSS Virtual keyboard";

const infoOS = document.createElement("p");
infoOS.className = "info";
infoOS.textContent = "This keyboard was made for Windows";

const infoLang = document.createElement("p");
infoLang.className = "info";
infoLang.textContent = `Current language: ${currentLang}`;

const textArea = document.createElement("textarea");
textArea.rows = "6";
textArea.className = "text";

page.appendChild(title);
page.appendChild(infoOS);
page.appendChild(infoLang);
page.appendChild(textArea);

// Create keyboard

const keyboard = document.createElement("div");
keyboard.className = "keyboard__wrapper";
const keysContainer = document.createElement("div");
keysContainer.className = "keyboard__keys-container";
keyboard.appendChild(keysContainer);

// Keys event hendlers

function arrowHandler(arrow, position) {
  textArea.value =
    textArea.value.slice(0, position) +
    arrow +
    textArea.value.slice(position, textArea.value.length);
  textArea.setSelectionRange(position + 1, position + 1);
}

function charHandler(key, position) {
  textArea.value =
    textArea.value.slice(0, position) +
    key.textContent +
    textArea.value.slice(position, textArea.value.length);
  textArea.setSelectionRange(position + 1, position + 1);
}

function backspaceHandler(position) {
  if (position === 0) {
    return;
  }
  const { value } = textArea;
  textArea.value =
    value.slice(0, position - 1) + value.slice(position, value.length);
  textArea.setSelectionRange(position - 1, position - 1);
}

function tabHandler(position) {
  textArea.value =
    textArea.value.slice(0, position) +
    String.fromCharCode(0x0009) +
    textArea.value.slice(position, textArea.value.length);
  textArea.setSelectionRange(position + 1, position + 1);
}

function delHandler(position) {
  if (position === textArea.value.length) {
    return;
  }
  const { value } = textArea;
  textArea.value =
    value.slice(0, position) + value.slice(position + 1, value.length);
  textArea.setSelectionRange(position, position);
}

function capsLockHandler() {
  capsLock = !capsLock;
  redrawKeyboard();
  if (capsLock) {
    keyboard.querySelector(".key-capslock").classList.add("capsON");
  } else {
    keyboard.querySelector(".key-capslock").classList.remove("capsON");
  }
}
function enterHandler(position) {
  textArea.value =
    textArea.value.slice(0, position) +
    String.fromCharCode(0x0d) +
    textArea.value.slice(position, textArea.value.length);
  textArea.setSelectionRange(position + 1, position + 1);
}

function shiftHandler() {
  capsLock = false;
  shift = !shift;
  redrawKeyboard();
  if (shift) {
    keyboard.querySelector(".key-shift").classList.add("capsON");
  } else {
    keyboard.querySelector(".key-shift").classList.remove("capsON");
  }
}

// Create keys button

function createKeysButton(keys, row) {
  keys.map((key) => {
    const keyButton = document.createElement("div");
    keyButton.classList = `keyboard__button key-${key.lowerCase.toLowerCase()}`;
    keyButton.textContent = capsLock || shift ? key.upperCase : key.lowerCase;

    keyButton.addEventListener("click", (event) => {
      event.preventDefault();
      position = textArea.selectionStart;
      textArea.focus();

      console.log(event.target.textContent);

      if (event.target.textContent.length == 1) {
        charHandler(event.target, position);
      } else if (event.target.textContent == "Backspace") {
        backspaceHandler(position);
      } else if (event.target.textContent == "Tab") {
        tabHandler(position);
      } else if (event.target.textContent == "Del") {
        delHandler(position);
      } else if (event.target.textContent == "CapsLock") {
        capsLockHandler();
      } else if (event.target.textContent == "Shift") {
        shiftHandler();
      } else if (event.target.textContent == "Enter") {
        enterHandler(position);
      }

      if (event.target.textContent != "Shift") {
        if (shift) {
          shift = false;
          redrawKeyboard();
        }
      }
    });

    row.appendChild(keyButton);
  });
}

// Create button rows

function createKeysRow(keysRow) {
  const row = document.createElement("div");
  row.className = "keyboard__row";
  createKeysButton(keysRow, row);
  keysContainer.appendChild(row);
}

function drawKeyboard() {
  createKeysRow(keysFirstRow);
  createKeysRow(keysSecondRow);
  createKeysRow(keysThirdRow);
  createKeysRow(keysFourthRow);
  createKeysRow(keysFifthRow);
  page.appendChild(keyboard);
}

function redrawKeyboard() {
  const rows = keysContainer.querySelectorAll(".keyboard__row");
  rows.forEach((row) => {
    keysContainer.removeChild(row);
  });
  drawKeyboard();
}

drawKeyboard();

// Add real keyboard event listeners

addEventListener("keydown", (event) => {
  position = textArea.selectionStart;

  // console.log(event);
  // console.log(event.key);

  event.preventDefault();

  textArea.focus();

  let keyValue = "";
  let location = 1;

  if (event.key == "ArrowUp") {
    keyValue = "▲";
    arrowHandler("▲", position);
  } else if (event.key == "ArrowDown") {
    keyValue = "▼";
    arrowHandler("▼", position);
  } else if (event.key == "ArrowLeft") {
    keyValue = "◄";
    arrowHandler("◄", position);
  } else if (event.key == "ArrowRight") {
    keyValue = "►";
    arrowHandler("►", position);
  } else if (event.key == "Meta") {
    keyValue = "win";
  } else if (event.key == "Delete") {
    keyValue = "del";
  } else if (event.key == "Alt") {
    keyValue = "alt";
    location = event.location;
  } else if (event.key == "Shift") {
    keyValue = "shift";
    location = event.location;
  } else if (event.key == "Control") {
    keyValue = "ctrl";
    location = event.location;
  } else {
    keyValue = event.key.toLowerCase();
  }

  if (event.key.length == 1) {
    const key = keyboard.querySelector(`.key-${keyValue}`);

    charHandler(key, position);
  }

  if (keyValue == "shift" || keyValue == "alt" || keyValue == "ctrl") {
    const activeButton = keyboard.querySelectorAll(`.key-${keyValue}`);
    activeButton[location - 1].classList.add("active");
  } else {
    const activeButton = keyboard.querySelector(`.key-${keyValue}`);
    activeButton.classList.add("active");
  }

  if (keyValue == "ctrl" && keyValue == "alt") {
    console.log(currentLang);
    if (currentLang == "ENG") {
      currentLang = "RUS";
    } else {
      currentLang = "ENG";
    }
  }

  if (event.key == "Tab") {
    tabHandler(position);
  }
  //TODO real Caps wors independently from virtual
  if (event.key == "CapsLock") {
    capsLockHandler();
  }

  //TODO while shift down virtual keyboard in upper case
});

addEventListener("keyup", (event) => {
  if (event.key != "CapsLock") {
    const activeButton = keyboard.querySelector(".active");
    activeButton.classList.remove("active");
  }
});
