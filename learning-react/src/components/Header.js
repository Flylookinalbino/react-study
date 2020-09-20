import React from 'react';
import Navigation from './Navigation';
import Logo from '../views/Logo';

const Header = () => {
    return (
        <div>
            <header className="p-3 border-b shadow-lg flex justify-between items-center rounded-bl-lg rounded-br-lg">
                <div className="w-20 inline-block">
                    <Logo />
                </div>
                
                <h1 
                    className="font-light text-3xl text-teal-700 tracking-widest "
                    >Flylookin
                    <span className="text-red-800 font-bold "
                    >Albino
                    </span>
                </h1>
                <Navigation />
            </header>
        </div>
    );
}

export default Header;
