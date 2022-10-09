import React, { useEffect, useState } from 'react';
import keymap from './keymap';
import { Keyboard } from './styles';
function App() {
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [keymapIndex, setKeymapIndex] = useState<number>(0);
  const [keyToPress, setKeyToPress] = useState<string>(keymap[keymapIndex]);
  const [keyStatus, setKeyStatus] = useState<string>("standby");

  const ignoredKeys = ["Dead", "NumLock", "End", "Clear", "PageUp", "PageDown", "Home", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Pause", "Insert", "Escape", "Delete", "Backspace", "Alt", "Tab", "CapsLock", "Shift", "Control", "Meta", "AltGraph", "ContextMenu", "Enter", "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp"];

  function pressedHandler(event: KeyboardEvent) {
    if (!ignoredKeys.includes(event.key)) {
      setKeyPressed(event.key);
      if (event.key === keyToPress) {
        if (keymapIndex + 1 < keymap.length) {
          setKeymapIndex((keymapIndex) => keymapIndex + 1);
          setKeyToPress(keymap[keymapIndex + 1]);
        } else {
          setKeymapIndex(0);
          setKeyToPress(keymap[0]);
        }
        setKeyStatus("correct");
      } else {
        setKeyStatus("wrong");
      }
    }
  }

  useEffect(() => {
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