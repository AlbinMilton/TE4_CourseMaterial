import React, { useState } from "react";

const AgeCounterComponent = () => {
  const [name, setName] = useState<string>("Taylor");
  const [age, setAge] = useState<number>(0);
  return (
    <div>
      <h2>Example - string & number - useState - Age Counter</h2>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Set Age</button>
      <p>
        Hello my name is {name}, I am {age} years old
      </p>
    </div>
  );
};

export default AgeCounterComponent;
