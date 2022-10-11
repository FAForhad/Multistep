import React from 'react';

import { Link } from 'react-router-dom';
import { BoltSlashIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    return (
        <div>

            <nav>
                <div className="navbar bg-teal-700 py-8">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>HOME</Link></li>
                                <li><Link to='/static'>STATIC</Link></li>
                                <li><Link to='/blogs'>BLOGS</Link></li>
                            </div>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-2xl md:text-4xl lg:text-4xl text-black font-bold"><BoltSlashIcon className="h-12 w-10 mx-2 text-green-900" /> MULTISTEP </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="menu menu-horizontal p-0 text-black text-2xl font-bold">
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/static'>STATIC</Link></li>
                            <li><Link to='/blogs'>BLOGS</Link></li>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Link to='/' className="btn btn-ghost normal-case text-4xl hidden lg:flex text-black font-bold"> MULTISTEP <BoltSlashIcon className="h-12 w-10 mx-2 text-green-900" /></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;