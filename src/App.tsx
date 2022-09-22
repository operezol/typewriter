import React, { useEffect, useState } from 'react';
import keymap from './keymap';
import { Keyboard } from './styles';
function App() {
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [keymapIndex, setKeymapIndex] = useState<number>(0);
  const [keyToPress, setKeyToPress] = useState<string>(keymap[keymapIndex]);
  const [keyStatus, setKeyStatus] = useState<string>("standby");

  useEffect(() => {
    const ignoredKeys = ["Dead", "NumLock", "End", "Clear", "PageUp", "PageDown", "Home", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Pause", "Insert", "Escape", "Delete", "Backspace", "Alt", "Tab", "CapsLock", "Shift", "Control", "Meta", "AltGraph", "ContextMenu", "Enter", "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp"];

    function pressedHandler(event: KeyboardEvent) {
      if (!ignoredKeys.includes(event.key)) {
        setKeyPressed(event.key);
        if (keyPressed === keyToPress) {
          setKeymapIndex(keymapIndex + 1);
          setKeyToPress(keymap[keymapIndex]);
          setKeyStatus("correct");
        } else {
          setKeyStatus("wrong");
        }
      }
    }

    window.addEventListener("keydown", pressedHandler);

    return () => {
      window.removeEventListener("keydown", pressedHandler);
    };
  });

  return (
    <Keyboard keyStatus={keyStatus}>
      <p>Please press {keyToPress}</p>
      <p>You have pressed {keyPressed}</p>
      <p>{keymapIndex}</p>
      <p>{keymap[keymapIndex]}</p>
    </Keyboard>
  );
}
export default App;