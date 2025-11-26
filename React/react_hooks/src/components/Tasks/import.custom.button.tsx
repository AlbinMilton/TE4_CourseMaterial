import React, { useState } from "react";
import CustomButton from "./custom.button";

type State = {
  isVisible: boolean;
};
const ToggleUI: React.FC<State> = ({ isVisible }) => {
  const [visible, setVisible] = useState<boolean>(isVisible);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <div>
      <h2>Toggle UI</h2>
      <CustomButton
        label={visible ? "Hide Button" : "Show Button"}
        onClick={handleToggle}
      />
      {visible && <div>Hello I am a Div</div>}
    </div>
  );
};
export default ToggleUI;
