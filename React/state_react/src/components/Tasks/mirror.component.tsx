import React, { useState } from "react";

const MirrorComponent = () => {
  const [text, setText] = useState<string>("InitialState");
  console.log(text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Exercise 2</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("InitialState")}>Reset</button>
    </div>
  );
};

export default MirrorComponent;
