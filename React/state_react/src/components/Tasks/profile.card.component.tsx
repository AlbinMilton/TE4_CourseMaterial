import React, { useState } from "react";

const profile = {
  name: "John Doe",
  age: 30,
};

const ProfileCardComponent = () => {
  const [form, setForm] = useState(profile);
  return (
    <div>
      <h2>Exercise 5</h2>
      <p>Name: {form.name} </p>
      <p>Age: {form.age} </p>
    </div>
  );
};

export default ProfileCardComponent;
