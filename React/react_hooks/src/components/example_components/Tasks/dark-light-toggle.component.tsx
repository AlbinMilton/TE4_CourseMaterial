import React, { useState } from "react";

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDarkMode(e.target.checked);
  }

  if (darkMode) {
    document.body.style.backgroundColor = "#1b1a1aff";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
  return (
    <div>
      <h2>Exercise 4</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
        Enable Dark Mode
      </label>
      <p>You are in {darkMode ? "dark" : "light"} mode</p>
    </div>
  );
};

export default ModeToggle;
