import React from 'react';
import { Link } from 'react-router-dom'

const NavMenu = (props) => {
    return (
        <nav className="divide-y divide-teal-600">
            <h1 className="text-teal-700 font-mono tracking-widest p-3 text-center">Nav Menu</h1>
            <ul className="pt-3">
            {/* <li className="text-red-800 font-light text-xl tracking-widest py-1 hover:text-red-700">Home</li> */}
                <Link 
                    to='/' 
                    className="text-red-800 font-light text-xl tracking-widest py-1 hover:text-red-700 block"
                    onClick={props.Menu}
                    >Home
                </Link>
            {/* <li className="text-red-800 font-light text-xl tracking-widest py-1 hover:text-red-700">About</li> */}
                <Link 
                    to='/about' 
                    className="text-red-800 font-light text-xl tracking-widest py-1 hover:text-red-700 block"
                    onClick={props.Menu}
                    >About
                </Link>
            </ul>
        </nav>
    );
}

export default NavMenu;
