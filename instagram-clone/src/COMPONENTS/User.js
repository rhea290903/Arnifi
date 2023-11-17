
import React from 'react';

const User = ({ username }) => {
  return (
    <div className="user">
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default User;
