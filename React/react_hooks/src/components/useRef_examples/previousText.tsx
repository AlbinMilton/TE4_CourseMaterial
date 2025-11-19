import React, { useRef, useState, useEffect } from "react";

const PreviousText = () => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string>("Albin");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h2>Previous</h2>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Current: {text}</p>
      <p>Old: {prevText.current}</p>
    </div>
  );
};

export default PreviousText;
