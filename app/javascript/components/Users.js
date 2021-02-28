import React from 'react';
import PropTypes from "prop-types";

const Users = ({ users }) => (
  <>
    <h1>All Users</h1>
    <ul>
      {users.map( u => (
        <li key={u.id}>
          {u.f_name} {u.l_name}
        </li>
      ))}
    </ul>
  </>
)

Users.propTypes = {
  users: PropTypes.array
};

export default Users
