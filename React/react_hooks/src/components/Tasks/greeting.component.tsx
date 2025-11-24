import { useState } from "react";

const GreetingComponent = () => {
  const [text, setText] = useState<string>("Hello Guest");
  return (
    <div>
      <h2>Exercise 1</h2>
      <p>{text}</p>
      <button onClick={() => setText("Hello Albin")}>My Name</button>
    </div>
  );
};

export default GreetingComponent;
