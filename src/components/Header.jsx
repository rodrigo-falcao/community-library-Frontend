import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                    <img
                        src="/logo-icon-white.svg"
                        alt="Logo"
                        className=""
                    />
                    <h1 className="text-xl ml-2">Library Community</h1>
                    </Link>
                </div>

                {/* Botão de menu mobile */}
                <button
                    className="md:hidden bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? 'X' : 'Menu'}
                </button>
                {/* Menu lateral mobile */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-blue-800 text-white p-4 transform ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 md:hidden`}
                >
                    <button
                        className="text-white text-xl font-bold mb-4 cursor-pointer"
                        onClick={closeMenu}
                    >
                        X
                    </button>
                    <nav className="space-y-4">
                        <a href="#services" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Services
                        </a>
                        <a href="#solutions" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Solutions
                        </a>
                        <a href="#donate" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Donate
                        </a>
                    </nav>
                    <div className="space-y-4 mt-4 flex flex-col">
                        <Link to="/login" className="bg-yellow-400 text-blue-500 px-4 py-2 rounded hover:bg-yellow-300 transition duration-300 w-full">
                            Login
                        </Link>
                        <Link
                            to="/try"
                            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300 w-full"
                        >
                            Try for Free
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <nav className="space-y-4 md:space-y-0 md:flex md:space-x-6">
                        <a href="#services" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Services
                        </a>
                        <a href="#solutions" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Solutions
                        </a>
                        <a href="#pricing" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Donate
                        </a>
                    </nav>
                    <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 mt-4 md:mt-0">
                        <button className="button primary px-4 py-2 rounded cursor-pointer">
                            <Link to='/login'>Login</Link>
                        </button>
                        <button className="button secondary px-4 py-2 rounded cursor-pointer">
                            Try for Free
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;