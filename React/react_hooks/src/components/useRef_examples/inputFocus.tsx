import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    focusInput();
  }, []);
  return (
    <div>
      <h2>Input Focus with Ref</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
