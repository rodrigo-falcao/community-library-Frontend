import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    // No handleSubmit, valide as senhas
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email !== form.confirmEmail) {
            setError('Emails do not match.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Lógica para enviar os dados do formulário
        console.log(form);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Lado esquerdo: cor primária */}
            <div className="hidden md:block md:w-1/2 bg-blue-900">
            <div className="flex items-center justify-center h-full text-white gap-4"> 
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo-icon-white.svg" alt="" />
                    <h2>Library Community</h2>
                </Link>
            </div>
            </div>
            {/* Lado direito: formulário de login */}
            <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 text-center">
                    Create your <span className='text-blue-900'>account with us!</span>
                </h2>
                <p className="text-black mb-3 md:mb-6 text-center text-sm md:text-base">
                    Fill in the fields below to <span className='text-blue-900'>sign up</span> <br/>and become part of our community!
                </p>
                <form onSubmit={handleSubmit} className='w-full max-w-md p-8 rounded md:shadow-lg'>
                        <div className='flex items-center mb-6 gap-4 justify-center'>
                            <Link to='/' className='flex items-center gap-2'>
                                <img src="/logo-icon-blue.svg" alt="icon-library" className='flex justify-center align-center'/>
                                <h3 className='text-black'>Library Community</h3>
                            </Link>
                        </div>
                        <div>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={form.userName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmEmail" className="block mb-2 text-sm font-medium">Confirm your e-mail</label>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={form.confirmEmail}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">Confirm your password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded-lg transition duration-200 cursor-pointer mb-10"
                        >Register
                        </button>
                        {/* Exibe o erro, se houver */}
                        {error && (
                            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center font-semibold">
                                {error}
                            </div>
                        )}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;