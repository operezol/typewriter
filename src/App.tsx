import React, { useEffect, useState } from 'react';


function App() {
  const [keyPressed, setKeyPressed] = useState<string>('');
  function pressedHandler(event: KeyboardEvent) {
    const ignoredKeys = ["NumLock", "End", "Clear", "PageUp", "PageDown", "Home", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Pause", "Insert", "Escape", "Delete", "Backspace", "Alt", "Tab", "CapsLock", "Shift", "Control", "Meta", "AltGraph", "ContextMenu", "Enter", "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp"];
    if (!ignoredKeys.includes(event.key)) {
      setKeyPressed(event.key);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", pressedHandler);
    return () => {
      window.removeEventListener("keydown", pressedHandler);
    };
  }, []);

  return (
    <h1>You have pressed {keyPressed}</h1>
  );
}

export default App;
