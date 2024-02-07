// UserItem.js
import React from 'react';
import UserItem from './UserItem';

const Users = ({ users, companyID }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
      {users.map((user, index) => (
        <UserItem key={index} {...user} companyID={companyID} />
      ))}
    </ul>
  );
};

export default Users;
