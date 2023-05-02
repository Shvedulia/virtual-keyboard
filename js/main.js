import keyData from './key-data.js';

const renderButtons = (buttonsRow) => buttonsRow.map((key) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', key);
  button.textContent = key;

  if (key === 'Space') {
    button.classList.add('space');
  }

  return button;
});

const renderKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(keyboard);

  const keyButtons = keyData.map((row) => {
    const keyRow = document.createElement('div');
    keyRow.classList.add('row');
    const buttons = renderButtons(row);
    keyRow.append(...buttons);

    return keyRow;
  });

  keyboard.append(...keyButtons);
};

renderKeyboard();
