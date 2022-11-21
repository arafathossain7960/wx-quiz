import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="flex">
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to='/'>Home</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="blog">Blog</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="quiz">Quiz</Link>
  </li>
  <li className="mr-6">
    <Link to='result' className="text-gray-400 hover:text-blue-800 "> result</Link>
  </li>
</ul>
        </div>
    );
};

export default Navbar;