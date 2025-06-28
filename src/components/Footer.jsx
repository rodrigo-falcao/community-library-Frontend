import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    const handleHomeClick = (e) => {
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // Se não estiver na home, o Link faz a navegação normalmente
    };
    return (
        <footer className="bg-blue-900 text-white pt-8 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center flex-col mb-2 text-lg">
                        <Link to='/' onClick={handleHomeClick} className="flex items-center mb-4">
                            <img src="/logo-icon-white.svg" alt="logo" className="w-8 h-8 mr-2" />
                            <p>Library Community</p>
                        </Link>
                        <p className="text-blue-100 text-sm">
                            Community Library was created for people who love to read and share. We make a better learning space for everyone.
                        </p>
                    </div>
                    <div className="text-center flex justify-around">
                        <Link to='/' onClick={handleHomeClick} className="hover:text-gray-200 transition duration-300 block cursor-pointer">Home</Link>
                        <a href='#services' className="hover:text-gray-200 transition duration-300 block cursor-pointer">Services</a>
                        <a href='#solutions' className="hover:text-gray-200 transition duration-300 block cursor-pointer">Solutions</a>
                        <a href='#donate' className="hover:text-gray-200 transition duration-300 block cursor-pointer">Donate</a>
                    </div>
                    <div className="mb-4">
                        <div className="font-semibold mb-2 text-left">Try It Today</div>
                            <p className="text-blue-100 text-sm mb-2">
                                Get started for free. Add your whole team as your needs grow.
                            </p>
                        <Link to='/register' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-6 rounded font-semibold transition text-sm border-box">
                            Start today →
                        </Link>
                    </div>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row justify-around items-center mt-10 border-t border-blue-800 pt-6 text-blue-100 text-xs gap-2">
                    <div className="flex items-center gap-2">
                        <span>🌎 English</span>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:underline">Terms & privacy</a>
                    </div>
                    <div className="flex justify-around">
                        <span>© 2025 Community Library. All rights reserved.</span>
                    </div>
                    <div className="flex align-center justify-center">
                        <a href="#" className="ml-4"><FaFacebookF size={24}/></a>
                        <a href="#" className="ml-4"><FaSquareXTwitter size={24}/></a>
                        <a href="#" className="ml-4"><FaLinkedinIn size={24}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}