import React from "react";

const UserNew = ({ user }) => {
  // if creating failed we can still get back the vals and doesn't clear out form
  const { f_name, l_name } = user;
  const defaultFName = f_name ? f_name : "";
  const defaultLName = l_name ? l_name : "";
  return (
    <>
      <h1>UserNew Component Here</h1>
      <form action="/users" method="post">
        <input
          placeholder="First Name"
          type="text"
          defaultValue={defaultFName}
          name="user[f_name]"
        />
        <input
          placeholder="Last Name"
          type="text"
          defaultValue={defaultLName}
          name="user[l_name]"
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
export default UserNew;
