import { useState } from "react";

const Count = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  return (
    <div>
      <h2>Exercise 3</h2>
      <p>Current Count: {currentCount}</p>
      <button onClick={() => setCurrentCount(currentCount + 1)}>
        Count: +
      </button>
      <button onClick={() => setCurrentCount(currentCount - 1)}>
        Count: -
      </button>
    </div>
  );
};

export default Count;
