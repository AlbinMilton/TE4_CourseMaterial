import React from "react";

type Admin = {
  isAdmin: boolean;
};
const Username: React.FC<Admin> = ({ isAdmin }) => {
  console.log(isAdmin);

  if (isAdmin) {
    return <h3>You have admin access</h3>;
  } else {
    return <h3>No</h3>;
  }
};

export default Username;
