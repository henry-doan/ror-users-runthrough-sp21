import React from "react";

const User = ({ user }) => {
  const { id, f_name, l_name, created_at } = user
  return (
    <>
      <h1>User Component Here</h1>
      <h3>{f_name} {l_name}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
    </>
  );
}

export default User;