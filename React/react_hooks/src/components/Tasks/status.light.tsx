import React from "react";

type OnlineCheck = {
  isOnline: boolean;
};
const UserStatus: React.FC<OnlineCheck> = ({ isOnline }) => {
  return (
    <p>
      Status:{" "}
      <span style={{ backgroundColor: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </p>
  );
};

export default UserStatus;
