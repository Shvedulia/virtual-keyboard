const keyLayout = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Ctrl'],
];

const renderKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(keyboard);

  const keyButtons = keyLayout.map((row) => {
    const keyRow = document.createElement('div');
    keyRow.classList.add('row');

    const buttons = row.map((key) => {
      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = key;
      if (key === 'Space') {
        button.classList.add('space');
      }

      return button;
    });

    keyRow.append(...buttons);

    return keyRow;
  });

  keyboard.append(...keyButtons);
};

renderKeyboard();
