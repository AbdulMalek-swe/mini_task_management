import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Navbar = () => {
  const [toggler,setToggler] = useState(false);
    const {setUserSearch} = useContext(AuthContext);
  return (
    <div className='container'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Tasks</Link></li>
              <li><Link to="/add/task">Add Task </Link></li>
              <li><Link to="/task/list/user">Task User </Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/add/task">Add Task </Link></li>
            <li><Link to="/task/list/user">Task User</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
         {
          !toggler ?  <button className="btn btn-ghost btn-circle" onClick={()=>setToggler(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>:<input type="text"  placeholder="Type User Name" className="input w-full max-w-xs" onChange={(e)=>setUserSearch(e.target.value)} />
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;