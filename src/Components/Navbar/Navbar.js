import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/wx-quiz.png'

const Navbar = () => {
    return (
   <div className='bg-gray-100 py-4 flex justify-between px-4 '>

  <ul className="flex ml-6">
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to='/'>Home</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="blog">Blog</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="chart">Chart</Link>
  </li>
 
</ul>
<img className='w-8 h-8' src={logo} alt="" />
 </div>
    );
};

export default Navbar;