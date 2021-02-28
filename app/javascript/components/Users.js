import React from 'react';
import PropTypes from "prop-types";

const url = "http://localhost:3000/users/";

const Users = ({ users }) => (
  <>
    <h1>All Users</h1>
    <a href={url + "new"}>Add User</a>
    <ul>
      {users.map( u => (
        <li key={u.id}>
          {u.f_name} {u.l_name}
          {" "}{/* space for formating  */}
          <a href={url + u.id}>show</a>
          {" "}
          <a href={url + u.id + '/edit'}>edit</a>
          {" "}
          <a
            href={url + u.id}
            data-method="delete"
          >
            delete
          </a>
        </li>
      ))}
    </ul>
  </>
)

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
