import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import User from '../../Components/User/User';
const UserList = () => {
  const [users, setUsers] = useState([])
  const config = {
    headers: {
      "AuthToken": "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
    }
  };
  // get all task list 
  useEffect(() => {
    axios.get("https://devza.com/tests/tasks/listusers", config)
      .then(data => {
        setUsers(data?.data?.users)
      })
  }, []);
  return (
    <div className='container mx-auto'>
      <table className="  w-96">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            users.map((user => <User key={user.id} user={user} />))
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserList;