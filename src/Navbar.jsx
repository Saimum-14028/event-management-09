import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="md:w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn text-lg p-2">Donate Now</a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu-horizontal gap-1 md:gap-5 px-1 text-lg font-semibold">
                        <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                    
                        <li><NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                My Events
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-lg">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;