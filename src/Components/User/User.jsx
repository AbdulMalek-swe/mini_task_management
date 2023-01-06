import React from 'react';

const User = ({user}) => {
  const {id,name} = user;
    return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      {/* user picture ar not showing so i can not use it  */}
    </tr>
    );
};

export default User;