let currentLang = localStorage.getItem('lang') || 'ENG';
const page = document.querySelector('body');
page.className = 'page';

// Create initial layout

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'RSS Virtual keyboard';

const infoOS = document.createElement('p');
infoOS.className = 'info';
infoOS.textContent = 'This keyboard was made for Windows';

const infoSwitchLang = document.createElement('p');
infoSwitchLang.className = 'info';
infoSwitchLang.textContent = 'To switch language press: left Ctrl + left Alt';

const infoLang = document.createElement('p');
infoLang.className = 'info';
infoLang.textContent = `Current language: ${currentLang}`;

const textArea = document.createElement('textarea');
textArea.rows = '6';
textArea.className = 'text';

page.appendChild(title);
page.appendChild(infoOS);
page.appendChild(infoSwitchLang);
page.appendChild(infoLang);
page.appendChild(textArea);

// Create keyboard

const virtualKeyboard = document.createElement('div');
virtualKeyboard.className = 'keyboard__wrapper';
const keysContainer = document.createElement('div');
keysContainer.className = 'keyboard__keys-container';
virtualKeyboard.appendChild(keysContainer);

// Create keys set

const engKeys = [
  {
    lowerCase: '`', upperCase: '`', shift: '~', row: 1,
  },
  {
    lowerCase: '1', upperCase: '1', shift: '!', row: 1,
  },
  {
    lowerCase: '2', upperCase: '2', shift: '@', row: 1,
  },
  {
    lowerCase: '3', upperCase: '3', shift: '#', row: 1,
  },
  {
    lowerCase: '4', upperCase: '4', shift: '$', row: 1,
  },
  {
    lowerCase: '5', upperCase: '5', shift: '%', row: 1,
  },
  {
    lowerCase: '6', upperCase: '6', shift: '^', row: 1,
  },
  {
    lowerCase: '7', upperCase: '7', shift: '&', row: 1,
  },
  {
    lowerCase: '8', upperCase: '8', shift: '*', row: 1,
  },
  {
    lowerCase: '9', upperCase: '9', shift: '(', row: 1,
  },
  {
    lowerCase: '0', upperCase: '0', shift: ')', row: 1,
  },
  {
    lowerCase: '-', upperCase: '-', shift: '_', row: 1,
  },
  {
    lowerCase: '=', upperCase: '=', shift: '+', row: 1,
  },
  { lowerCase: 'Backspace', upperCase: 'Backspace', row: 1 },
  { lowerCase: 'Tab', upperCase: 'Tab', row: 2 },
  {
    lowerCase: 'q',
    upperCase: 'Q',
    row: 2,
    keyCode: 'KeyQ',
  },
  {
    lowerCase: 'w',
    upperCase: 'W',
    row: 2,
    keyCode: 'KeyW',
  },
  {
    lowerCase: 'e',
    upperCase: 'E',
    row: 2,
    keyCode: 'KeyE',
  },
  {
    lowerCase: 'r',
    upperCase: 'R',
    row: 2,
    keyCode: 'KeyR',
  },
  {
    lowerCase: 't',
    upperCase: 'T',
    row: 2,
    keyCode: 'KeyT',
  },
  {
    lowerCase: 'y',
    upperCase: 'Y',
    row: 2,
    keyCode: 'KeyY',
  },
  {
    lowerCase: 'u',
    upperCase: 'U',
    row: 2,
    keyCode: 'KeyU',
  },
  {
    lowerCase: 'i',
    upperCase: 'I',
    row: 2,
    keyCode: 'KeyI',
  },
  {
    lowerCase: 'o',
    upperCase: 'O',
    row: 2,
    keyCode: 'KeyO',
  },
  {
    lowerCase: 'p',
    upperCase: 'P',
    row: 2,
    keyCode: 'KeyP',
  },
  {
    lowerCase: '[',
    upperCase: '[',
    shift: '{',
    row: 2,
    keyCode: 'BracketLeft',
  },
  {
    lowerCase: ']',
    upperCase: ']',
    shift: '}',
    row: 2,
    keyCode: 'BracketRight',
  },
  {
    lowerCase: '\\',
    upperCase: '\\',
    shift: '|',
    row: 2,
    keyCode: 'Backslash',
  },
  {
    lowerCase: 'Del',
    upperCase: 'Del',
    row: 2,
    keyCode: 'Delete',
  },
  {
    lowerCase: 'CapsLock',
    upperCase: 'CapsLock',
    row: 3,
    props: { capslock: true },
  },
  {
    lowerCase: 'a',
    upperCase: 'A',
    row: 3,
    keyCode: 'KeyA',
  },
  {
    lowerCase: 's',
    upperCase: 'S',
    row: 3,
    keyCode: 'KeyS',
  },
  {
    lowerCase: 'd',
    upperCase: 'D',
    row: 3,
    keyCode: 'KeyD',
  },
  {
    lowerCase: 'f',
    upperCase: 'F',
    row: 3,
    keyCode: 'KeyF',
  },
  {
    lowerCase: 'g',
    upperCase: 'G',
    row: 3,
    keyCode: 'KeyG',
  },
  {
    lowerCase: 'h',
    upperCase: 'H',
    row: 3,
    keyCode: 'KeyH',
  },
  {
    lowerCase: 'j',
    upperCase: 'J',
    row: 3,
    keyCode: 'KeyJ',
  },
  {
    lowerCase: 'k',
    upperCase: 'K',
    row: 3,
    keyCode: 'KeyK',
  },
  {
    lowerCase: 'l',
    upperCase: 'L',
    row: 3,
    keyCode: 'KeyL',
  },
  {
    lowerCase: ';',
    upperCase: ';',
    shift: ':',
    row: 3,
    keyCode: 'Semicolon',
  },
  {
    lowerCase: "'",
    upperCase: "'",
    shift: '"',
    row: 3,
    keyCode: 'Quote',
  },
  { lowerCase: 'Enter', upperCase: 'Enter', row: 3 },
  {
    lowerCase: 'Shift',
    upperCase: 'Shift',
    row: 4,
    keyCode: 'ShiftLeft',
    props: { shift: true },
  },
  {
    lowerCase: 'z',
    upperCase: 'Z',
    row: 4,
    keyCode: 'KeyZ',
  },
  {
    lowerCase: 'x',
    upperCase: 'X',
    row: 4,
    keyCode: 'KeyX',
  },
  {
    lowerCase: 'c',
    upperCase: 'C',
    row: 4,
    keyCode: 'KeyC',
  },
  {
    lowerCase: 'v',
    upperCase: 'V',
    row: 4,
    keyCode: 'KeyV',
  },
  {
    lowerCase: 'b',
    upperCase: 'B',
    row: 4,
    keyCode: 'KeyB',
  },
  {
    lowerCase: 'n',
    upperCase: 'N',
    row: 4,
    keyCode: 'KeyN',
  },
  {
    lowerCase: 'm',
    upperCase: 'M',
    row: 4,
    keyCode: 'KeyM',
  },
  {
    lowerCase: ',',
    upperCase: ',',
    shift: '<',
    row: 4,
    keyCode: 'Comma',
  },
  {
    lowerCase: '.',
    upperCase: '.',
    shift: '>',
    row: 4,
    keyCode: 'Period',
  },
  {
    lowerCase: '/',
    upperCase: '/',
    shift: '?',
    row: 4,
    keyCode: 'Slash',
  },
  {
    lowerCase: '▲',
    upperCase: '▲',
    row: 4,
    keyCode: 'ArrowUp',
  },
  {
    lowerCase: 'Shift',
    upperCase: 'Shift',
    row: 4,
    keyCode: 'ShifRight',
    props: { shift: true },
  },
  {
    lowerCase: 'Ctrl',
    upperCase: 'Ctrl',
    row: 5,
    keyCode: 'ControlLeft',
    props: { noHandle: true },
  },
  {
    lowerCase: 'Win',
    upperCase: 'Win',
    row: 5,
    keyCode: 'MetaLeft',
    props: { noHandle: true },
  },
  {
    lowerCase: 'Alt',
    upperCase: 'Alt',
    row: 5,
    keyCode: 'AltLeft',
    props: { noHandle: true },
  },
  { lowerCase: ' ', upperCase: ' ', row: 5 },
  {
    lowerCase: 'Alt',
    upperCase: 'Alt',
    row: 5,
    keyCode: 'AltRight',
    props: { noHandle: true },
  },
  {
    lowerCase: '◄',
    upperCase: '◄',
    row: 5,
    keyCode: 'ArrowLeft',
  },
  {
    lowerCase: '▼',
    upperCase: '▼',
    row: 5,
    keyCode: 'ArrowRight',
  },
  {
    lowerCase: '►',
    upperCase: '►',
    row: 5,
    keyCode: 'ArrowDown',
  },
  {
    lowerCase: 'Ctrl',
    upperCase: 'Ctrl',
    row: 5,
    keyCode: 'ControlRight',
    props: { noHandle: true },
  },
];

const rusKeys = [
  { lowerCase: 'ё', upperCase: 'Ё', row: 1 },
  {
    lowerCase: '1', upperCase: '1', shift: '!', row: 1,
  },
  {
    lowerCase: '2', upperCase: '2', shift: '@', row: 1,
  },
  {
    lowerCase: '3', upperCase: '3', shift: '#', row: 1,
  },
  {
    lowerCase: '4', upperCase: '4', shift: '$', row: 1,
  },
  {
    lowerCase: '5', upperCase: '5', shift: '%', row: 1,
  },
  {
    lowerCase: '6', upperCase: '6', shift: '^', row: 1,
  },
  {
    lowerCase: '7', upperCase: '7', shift: '&', row: 1,
  },
  {
    lowerCase: '8', upperCase: '8', shift: '*', row: 1,
  },
  {
    lowerCase: '9', upperCase: '9', shift: '(', row: 1,
  },
  {
    lowerCase: '0', upperCase: '0', shift: ')', row: 1,
  },
  {
    lowerCase: '-', upperCase: '-', shift: '_', row: 1,
  },
  {
    lowerCase: '=', upperCase: '=', shift: '+', row: 1,
  },
  { lowerCase: 'Backspace', upperCase: 'Backspace', row: 1 },
  { lowerCase: 'Tab', upperCase: 'Tab', row: 2 },
  {
    lowerCase: 'й',
    upperCase: 'Й',
    row: 2,
    keyCode: 'KeyQ',
  },
  {
    lowerCase: 'ц',
    upperCase: 'Ц',
    row: 2,
    keyCode: 'KeyW',
  },
  {
    lowerCase: 'у',
    upperCase: 'У',
    row: 2,
    keyCode: 'KeyE',
  },
  {
    lowerCase: 'к',
    upperCase: 'К',
    row: 2,
    keyCode: 'KeyR',
  },
  {
    lowerCase: 'е',
    upperCase: 'Е',
    row: 2,
    keyCode: 'KeyT',
  },
  {
    lowerCase: 'н',
    upperCase: 'Н',
    row: 2,
    keyCode: 'KeyY',
  },
  {
    lowerCase: 'г',
    upperCase: 'Г',
    row: 2,
    keyCode: 'KeyU',
  },
  {
    lowerCase: 'ш',
    upperCase: 'Ш',
    row: 2,
    keyCode: 'KeyI',
  },
  {
    lowerCase: 'щ',
    upperCase: 'Щ',
    row: 2,
    keyCode: 'KeyO',
  },
  {
    lowerCase: 'з',
    upperCase: 'З',
    row: 2,
    keyCode: 'KeyP',
  },
  {
    lowerCase: 'х',
    upperCase: 'Х',
    row: 2,
    keyCode: 'BracketLeft',
  },
  {
    lowerCase: 'ъ',
    upperCase: 'Ъ',
    row: 2,
    keyCode: 'BracketRight',
  },
  {
    lowerCase: '\\',
    upperCase: '\\',
    shift: '/',
    row: 2,
    keyCode: 'Backslash',
  },
  {
    lowerCase: 'Del',
    upperCase: 'Del',
    row: 2,
    keyCode: 'Delete',
  },
  {
    lowerCase: 'CapsLock',
    upperCase: 'CapsLock',
    row: 3,
    props: { capslock: true },
  },
  {
    lowerCase: 'ф',
    upperCase: 'Ф',
    row: 3,
    keyCode: 'KeyA',
  },
  {
    lowerCase: 'ы',
    upperCase: 'Ы',
    row: 3,
    keyCode: 'KeyS',
  },
  {
    lowerCase: 'в',
    upperCase: 'В',
    row: 3,
    keyCode: 'KeyD',
  },
  {
    lowerCase: 'а',
    upperCase: 'А',
    row: 3,
    keyCode: 'KeyF',
  },
  {
    lowerCase: 'п',
    upperCase: 'П',
    row: 3,
    keyCode: 'KeyG',
  },
  {
    lowerCase: 'р',
    upperCase: 'Р',
    row: 3,
    keyCode: 'KeyH',
  },
  {
    lowerCase: 'о',
    upperCase: 'О',
    row: 3,
    keyCode: 'KeyJ',
  },
  {
    lowerCase: 'л',
    upperCase: 'Л',
    row: 3,
    keyCode: 'KeyK',
  },
  {
    lowerCase: 'д',
    upperCase: 'Д',
    row: 3,
    keyCode: 'KeL',
  },
  {
    lowerCase: 'ж',
    upperCase: 'Ж',
    row: 3,
    keyCode: 'Semicolon',
  },
  {
    lowerCase: 'э',
    upperCase: 'Э',
    row: 3,
    keyCode: 'Quote',
  },
  { lowerCase: 'Enter', upperCase: 'Enter', row: 3 },
  {
    lowerCase: 'Shift',
    upperCase: 'Shift',
    row: 4,
    keyCode: 'ShiftLeft',
    props: { shift: true },
  },
  {
    lowerCase: 'я',
    upperCase: 'Я',
    row: 4,
    keyCode: 'KeyZ',
  },
  {
    lowerCase: 'ч',
    upperCase: 'Ч',
    row: 4,
    keyCode: 'KeyX',
  },
  {
    lowerCase: 'с',
    upperCase: 'С',
    row: 4,
    keyCode: 'KeyC',
  },
  {
    lowerCase: 'м',
    upperCase: 'М',
    row: 4,
    keyCode: 'KeyV',
  },
  {
    lowerCase: 'и',
    upperCase: 'И',
    row: 4,
    keyCode: 'KeyB',
  },
  {
    lowerCase: 'т',
    upperCase: 'Т',
    row: 4,
    keyCode: 'KeyN',
  },
  {
    lowerCase: 'ь',
    upperCase: 'Ь',
    row: 4,
    keyCode: 'KeyM',
  },
  {
    lowerCase: 'б',
    upperCase: 'Б',
    row: 4,
    keyCode: 'Comma',
  },
  {
    lowerCase: 'ю',
    upperCase: 'Ю',
    row: 4,
    keyCode: 'Period',
  },
  {
    lowerCase: '.',
    upperCase: '.',
    shift: ',',
    row: 4,
    keyCode: 'Slash',
  },
  {
    lowerCase: '▲',
    upperCase: '▲',
    row: 4,
    keyCode: 'ArrowUp',
  },
  {
    lowerCase: 'Shift',
    upperCase: 'Shift',
    row: 4,
    keyCode: 'ShifRight',
    props: { shift: true },
  },
  {
    lowerCase: 'Ctrl',
    upperCase: 'Ctrl',
    row: 5,
    keyCode: 'ControlLeft',
    props: { noHandle: true },
  },
  {
    lowerCase: 'Win',
    upperCase: 'Win',
    row: 5,
    keyCode: 'MetaLeft',
    props: { noHandle: true },
  },
  {
    lowerCase: 'Alt',
    upperCase: 'Alt',
    row: 5,
    keyCode: 'AltLeft',
    props: { noHandle: true },
  },
  { lowerCase: ' ', upperCase: ' ', row: 5 },
  {
    lowerCase: 'Alt',
    upperCase: 'Alt',
    row: 5,
    keyCode: 'AltRight',
    props: { noHandle: true },
  },
  {
    lowerCase: '◄',
    upperCase: '◄',
    row: 5,
    keyCode: 'ArrowLeft',
  },
  {
    lowerCase: '▼',
    upperCase: '▼',
    row: 5,
    keyCode: 'ArrowRight',
  },
  {
    lowerCase: '►',
    upperCase: '►',
    row: 5,
    keyCode: 'ArrowDown',
  },
  {
    lowerCase: 'Ctrl',
    upperCase: 'Ctrl',
    row: 5,
    keyCode: 'ControlRight',
    props: { noHandle: true },
  },
];

let keysLanguage = currentLang === 'ENG' ? [...engKeys] : [...rusKeys];

class Key {
  lowerCase;

  upperCase;

  shift;

  keyboard;

  key = null;

  noHandle;

  constructor(lowerCase, upperCase, shift, noHanle, keyboard) {
    this.lowerCase = lowerCase;
    this.upperCase = upperCase;
    this.shift = shift;
    this.keyboard = keyboard;
    this.noHandle = noHanle;
  }

  create(row) {
    this.key = document.createElement('div');
    this.key.classList = `keyboard__button key-${this.lowerCase.toLowerCase()}`;
    this.key.textContent = this.lowerCase;

    this.key.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleClick();
    });

    row.appendChild(this.key);
    return this;
  }

  handleClick(trueKey = false) {
    this.key.classList.add('active');
    const position = textArea.selectionStart;
    textArea.focus();

    if (!this.noHandle) {
      if (this.lowerCase === 'Backspace') {
        this.backspaceHandler(position);
      } else if (this.lowerCase === 'Tab') {
        this.tabHandler(position);
      } else if (this.lowerCase === 'Del') {
        this.delHandler(position);
      } else if (this.lowerCase === 'CapsLock') {
        this.keyboard.capslock();
      } else if (this.lowerCase === 'Shift') {
        this.keyboard.shift();
      } else if (this.lowerCase === 'Enter') {
        this.enterHandler(position);
      } else {
        this.charHandler(this.key, position);
      }

      if (this.lowerCase !== 'Shift') {
        if (this.keyboard.shiftOn) {
          this.keyboard.shift(false);
        }
      }
    }
    if (!trueKey) {
      setTimeout(() => {
        this.key.classList.remove('active');
      }, 100);
    }
  }

  switchCase({ shiftOn = false, capslockOn = false }) {
    const upperCase = shiftOn || capslockOn;

    if (upperCase) {
      if (shiftOn) {
        this.key.textContent = this.shift ? this.shift : this.upperCase;
      } else {
        this.key.textContent = this.upperCase;
      }
    } else this.key.textContent = this.lowerCase;
  }

  arrowHandler(arrow, position) {
    textArea.value = textArea.value.slice(0, position)
      + arrow
      + textArea.value.slice(position, textArea.value.length);
    textArea.setSelectionRange(position + 1, position + 1);
  }

  charHandler(key, position) {
    textArea.value = textArea.value.slice(0, position)
      + key.textContent
      + textArea.value.slice(position, textArea.value.length);
    textArea.setSelectionRange(position + 1, position + 1);
  }

  backspaceHandler(position) {
    if (position === 0) {
      return;
    }
    const { value } = textArea;
    textArea.value = value.slice(0, position - 1) + value.slice(position, value.length);
    textArea.setSelectionRange(position - 1, position - 1);
  }

  tabHandler(position) {
    textArea.value = textArea.value.slice(0, position)
      + String.fromCharCode(0x0009)
      + textArea.value.slice(position, textArea.value.length);
    textArea.setSelectionRange(position + 1, position + 1);
  }

  delHandler(position) {
    if (position === textArea.value.length) {
      return;
    }
    const { value } = textArea;
    textArea.value = value.slice(0, position) + value.slice(position + 1, value.length);
    textArea.setSelectionRange(position, position);
  }

  enterHandler(position) {
    textArea.value = textArea.value.slice(0, position)
      + String.fromCharCode(0x0d)
      + textArea.value.slice(position, textArea.value.length);
    textArea.setSelectionRange(position + 1, position + 1);
  }
}

class KeyBoard {
  keys;

  rawKeys;

  language;

  rowsNumber = 5;

  onLower = true;

  capslockOn = false;

  shiftOn = false;

  shiftButtons = [];

  capslockButtons = [];

  constructor(language, keys, rowsNumber = 5) {
    this.language = language;
    this.rawKeys = keys;
    this.rowsNumber = rowsNumber;
    this.keys = new Map();
  }

  create() {
    for (let i = 1; i <= this.rowsNumber; i += 1) {
      this.createRow(this.rawKeys.filter((key) => key.row === i));
    }
    page.appendChild(virtualKeyboard);
    return this;
  }

  createRow(keys) {
    const row = document.createElement('div');
    row.className = 'keyboard__row';
    for (const {
      lowerCase, upperCase, props, shift, keyCode,
    } of keys) {
      const key = new Key(
        lowerCase,
        upperCase,
        shift,
        props ? props.noHandle : false,
        this,
      ).create(row);
      if (props && props.shift) {
        this.shiftButtons.push(key);
      } else if (props && props.capslock) {
        this.capslockButtons.push(key);
      }
      this.keys.set(keyCode || lowerCase, key);
    }
    keysContainer.appendChild(row);
  }

  delete() {
    const rows = keysContainer.querySelectorAll('.keyboard__row');
    rows.forEach((row) => {
      keysContainer.removeChild(row);
    });
  }

  trueKeyboard(keyCode, letter) {
    const key = this.keys.get(keyCode) || this.keys.get(letter.toLowerCase());

    if (!key) {
      return;
    }
    const trueKey = true;
    key.handleClick(trueKey);
  }

  shift() {
    this.shiftOn = !this.shiftOn;
    this.capslockOn = false;
    this.switchCase();
  }

  capslock() {
    this.shiftOn = false;
    this.capslockOn = !this.capslockOn;
    this.switchCase();
  }

  switchCase() {
    for (const key of this.shiftButtons) {
      if (this.shiftOn) {
        key.key.classList.add('capsON');
      } else {
        key.key.classList.remove('capsON');
      }
    }

    for (const key of this.capslockButtons) {
      if (this.capslockOn) {
        key.key.classList.add('capsON');
      } else {
        key.key.classList.remove('capsON');
      }
    }

    for (const key of this.keys.values()) {
      key.switchCase({ capslockOn: this.capslockOn, shiftOn: this.shiftOn });
    }
  }
}

let currentKeyboard = new KeyBoard('Eng', keysLanguage).create();

// Add real keyboard event listeners

addEventListener('keydown', (event) => {
  event.preventDefault();
  textArea.focus();

  if (
    (event.code === 'ShiftLeft' && currentKeyboard.shiftOn)
    || (event.code === 'ShiftRight' && currentKeyboard.shiftOn)
  ) {
    currentKeyboard.shift();
  }

  currentKeyboard.trueKeyboard(event.code, event.key);

  if (event.altKey && event.ctrlKey && event.location === 1) {
    if (currentLang === 'ENG') {
      currentLang = 'RUS';
    } else {
      currentLang = 'ENG';
    }
    localStorage.setItem('lang', currentLang);
    infoLang.textContent = `Current language: ${currentLang}`;

    keysLanguage = currentLang === 'ENG' ? [...engKeys] : [...rusKeys];

    setTimeout(() => {
      currentKeyboard.delete();
      currentKeyboard = new KeyBoard('', keysLanguage).create();
    }, 200);
  }
});

addEventListener('keyup', (event) => {
  event.preventDefault();
  if (
    (event.code === 'ShiftLeft' && currentKeyboard.shiftOn)
    || (event.code === 'ShiftRight' && currentKeyboard.shiftOn)
  ) {
    currentKeyboard.shift();
  }
  const activeKeys = document.querySelectorAll('.active');

  activeKeys.forEach((key) => {
    if (key.classList[-1] !== 'key-capslock') key.classList.remove('active');
  });
});
