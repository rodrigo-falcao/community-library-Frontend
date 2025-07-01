import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
            <div className="bg-white w-full max-w-md p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Forgot your password?</h2>
                <p className="mb-6 text-center">
                    Enter your email address and we'll send you instructions to reset your password.
                </p>
                {sent ? (
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-center font-semibold">
                        If this email exists, you will receive instructions soon.
                    </div>
                ) : (
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-sm font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold cursor-pointer hover:bg-blue-700 transition duration-200"
                    >
                        Send instructions
                    </button>
                </form>
                )}
                <div className="flex justify-between mt-6 text-sm">
                    <Link to="/" className="text-primary hover:underline">
                        Back to Home
                    </Link>
                    <Link to="/login" className="text-primary hover:underline">
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}