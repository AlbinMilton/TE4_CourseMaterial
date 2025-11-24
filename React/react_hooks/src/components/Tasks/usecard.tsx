import React from "react";

const UseCard = () => {
  interface User {
    id: number;
    name: string;
    age: number;
  }
  const users: User[] = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 },
  ];
  return (
    <div>
      <h2>User Cards</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}: {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCard;
