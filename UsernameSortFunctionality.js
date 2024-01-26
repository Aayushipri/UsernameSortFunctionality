/** @format */

import React, { useState, useEffect } from "react";

const UsernameSortFunctionality = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        throw error;
      });
  }, []);

  const handleAscendingOrderSort = () => {
    const users = [...userData].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUserData(users);
  };

  const handleDescendingSort = () => {
    const users = [...userData].sort((a, b) =>
      b.username.localeCompare(a.username)
    );
    setUserData(users);
  };

  return (
    <div className="App">
      <h1> Sort by username</h1>
      <button
        onClick={() => {
          handleAscendingOrderSort();
        }}
      >
        Sort by Ascending
      </button>
      <button
        onClick={() => {
          handleDescendingSort();
        }}
      >
        Sort by Descenidng
      </button>
      {userData &&
        userData.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        ))}
    </div>
  );
};

export default UsernameSortFunctionality;
