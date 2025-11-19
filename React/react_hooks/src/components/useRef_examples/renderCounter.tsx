import React, { useRef, useState } from "react";

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  return (
    <div>
      <h2>Render Counter</h2>
      <p>Count in State: {count}</p>
      <p>Count in Ref: {renderCount.current}</p>
      <hr />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment State Count
      </button>
      <button
        onClick={() => {
          renderCount.current++;
        }}
      >
        Increment Ref only
      </button>
    </div>
  );
};

export default RenderCounter;
