import React from 'react';
import UserCard from './UserCard'


const UserList = ({users}) => {
  return (
    users.map(user =>
      <UserCard user={user} />
    )
  )
}

export default UserList;