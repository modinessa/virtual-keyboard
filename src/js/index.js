let currentLang = "ENG"; //TODO Get language from OS
let capsLock = false;

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
textArea.autofocus = true;
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

// Spesial keys event hendlera

function shiftHandler() {}

function backspaceHandler() {
  const cursorPosition = textArea.selectionStart;
  console.log(cursorPosition);
  // textArea.textContent = textArea.textContent.slice(0, -1);
}

// Create keys button

function createKeysButton(keys, row) {
  keys.map((key) => {
    const keyButton = document.createElement("div");
    keyButton.classList = `keyboard__button key-${key.lowerCase.toLowerCase()}`;
    keyButton.textContent = capsLock ? key.upperCase : key.lowerCase;
    keyButton.addEventListener("click", (event) => {
      event.preventDefault();
      textArea.focus();
      const clickedButton =
        event.target.classList[event.target.classList.length - 1];
      if (clickedButton === "key-shift") {
        shiftHandler();
      } else if (clickedButton === "key-backspace") {
        backspaceHandler();
      } else {
        const cursorPosition = textArea.selectionStart;

        textArea.value =
          textArea.value[(0, cursorPosition)] +
          event.target.textContent +
          textArea.value[(cursorPosition + 1, textArea.value.length)];
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

createKeysRow(keysFirstRow);
createKeysRow(keysSecondRow);
createKeysRow(keysThirdRow);
createKeysRow(keysFourthRow);
createKeysRow(keysFifthRow);

page.appendChild(keyboard);

// KeyBoard event

addEventListener("keydown", (event) => {
  console.log(event.key);
  const activeButton = keyboard.querySelector(
    `.key-${event.key.toLowerCase()}`
  );
  activeButton.classList.add("active");
  if (event.key) {
    console.log(event.key);
  }
});

addEventListener("keyup", () => {
  const activeButton = keyboard.querySelector(".active");
  activeButton.classList.remove("active");
});
