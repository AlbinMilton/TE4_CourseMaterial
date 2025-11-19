import React, { useState } from "react";

const profile = {
  name: "John Doe",
  age: 30,
};

const ProfileCardComponent = () => {
  const [user, setUser] = useState(profile);
  return (
    <div>
      <h2>Exercise 5</h2>
      <p>
        Name: {user.name}{" "}
        <button onClick={() => setUser({ ...user, name: "Hasse Ravelli" })}>
          Edit
        </button>
      </p>
      <p>
        Age: {user.age}{" "}
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          Increase
        </button>
      </p>
    </div>
  );
};

export default ProfileCardComponent;
