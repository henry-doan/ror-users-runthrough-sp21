import React from "react";

const UserEdit = ({ user }) => {
  // if creating failed we can still get back the vals and doesn't clear out form
  const { f_name, l_name, id } = user;
  const defaultFName = f_name ? f_name : "";
  const defaultLName = l_name ? l_name : "";
  return (
    <>
      <h1>UserEdit Component Here</h1>
      <form action={`/users/${id}`} method="post">
        {/* need this for edit because html */}
        <input type="hidden" name="_method" value="patch" /> 
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
        <button type="submit">Update User</button>
      </form>
    </>
  );
}

export default UserEdit;