import keyData from './key-data.js';

let defaultLang = 'en';

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const swithLangShortCut = document.createElement('p');
swithLangShortCut.classList.add('shortcut');
swithLangShortCut.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

document.body.append(swithLangShortCut);

const renderButtons = (buttonsRow) => buttonsRow.map((key) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', key.code);
  button.textContent = key[defaultLang];

  if (key.code === 'Space') {
    button.classList.add('space');
  }

  return button;
});

const renderKeyboard = () => {
  const keyButtons = keyData.map((row) => {
    const keyRow = document.createElement('div');
    keyRow.classList.add('row');
    const buttons = renderButtons(row);
    keyRow.append(...buttons);

    return keyRow;
  });

  keyboard.innerHTML = '';
  keyboard.append(...keyButtons);
};

const onKeyDown = (e) => {
  const button = document.getElementById(e.code);
  if (button) {
    button.classList.add('active');
  }

  const altLeft = document.getElementById('AltLeft');
  const ctrlLeft = document.getElementById('ControlLeft');

  if ((e.code === 'AltLeft' && ctrlLeft.classList.contains('active'))
      || (e.code === 'ControlLeft' && altLeft.classList.contains('active'))) {
    defaultLang = defaultLang === 'en' ? 'ru' : 'en';
    renderKeyboard();
  }
};

const onKeyUp = (e) => {
  const button = document.getElementById(e.code);
  if (button) {
    button.classList.remove('active');
  }
};

document.body.addEventListener('keydown', onKeyDown);
document.body.addEventListener('keyup', onKeyUp);

renderKeyboard();
