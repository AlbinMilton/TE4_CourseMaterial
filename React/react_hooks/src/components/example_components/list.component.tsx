import React, { useState } from "react";

const ListComponent = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (!input.trim()) return;
    //create a new array with the tasks
    setList([...list, input]);
    setInput("");
  };

  const removeTask = (index: number) => {
    //create a new array excluding the item clicked on
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
  };
  return (
    <div>
      <h2> Example arrays in useState - TODO LIST</h2>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTask}>Add Task</button>

      {list.length && (
        <ul>
          {list.map((task, i) => (
            <li key={i}>
              {task} <button onClick={() => removeTask(i)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
