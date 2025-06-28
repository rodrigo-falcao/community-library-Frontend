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
        <header className=" text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                    <img
                        src="/flat-icon.png"
                        alt="Logo"
                        className="h-10 w-10 rounded-full"
                    />
                    <h1 className="text-xl font-bold ml-2">Community Library</h1>
                    </Link>
                </div>

                {/* Botão de menu mobile */}
                <button
                    className="md:hidden bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? 'X' : 'Menu'}
                </button>

                {/* Menu lateral mobile */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-blue-500 text-white p-4 transform ${
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
                        <a href="#products" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Products
                        </a>
                        <a href="#solutions" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Solutions
                        </a>
                        <a href="#resources" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Resources
                        </a>
                        <a href="#pricing" className="hover:text-gray-200 transition duration-300 block cursor-pointer" onClick={closeMenu}>
                            Pricing
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
                        <a href="#products" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Services
                        </a>
                        <a href="#solutions" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Solutions
                        </a>
                        <a href="#resources" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Resources
                        </a>
                        <a href="#pricing" className="hover:text-gray-200 transition duration-300 block md:inline">
                            Donate
                        </a>
                    </nav>
                    <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 mt-4 md:mt-0">
                        <button className="button primary px-4 py-2 rounded cursor-pointer">
                            Login
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