import React from "react";

const List = props => {
  console.log("props from List", props.user);
  return (
    <div className="userContainer">
      {props.user.map(user => {
        return (
          <div className="userCard">
            <p>User: {user.data.name}</p>
            <p>Password: {user.data.password}</p>
            <p>Email: {user.data.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
