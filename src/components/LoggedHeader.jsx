import { Link, useNavigate } from "react-router-dom";

export default function LoggedHeader() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <header className="w-full bg-blue-900 text-white flex items-center justify-between px-4 py-3 mb-6 ">
            <div className="container flex justify-between gap-4">
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo-icon-white.svg"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                        <h1 className="text-lg md:text-xl ml-2 hidden sm:block">Library Community</h1>
                    </Link>
                    <nav className="flex gap-6">
                        <Link to="/users" className="hover:underline">Users</Link>
                        <Link to="/books" className="hover:underline">Books</Link>
                        <Link to="/loans" className="hover:underline">Loans</Link>
                    </nav>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded cursor-pointer transition duration-300"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}