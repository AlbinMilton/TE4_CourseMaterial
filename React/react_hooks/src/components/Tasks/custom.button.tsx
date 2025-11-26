import React from "react";

type Props = {
  label: string;
  onClick: () => void;
};
const CustomButton: React.FC<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CustomButton;
