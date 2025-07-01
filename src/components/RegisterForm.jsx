import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        avatar: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (form.email !== form.confirmEmail) {
            setError('Emails do not match.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!form.avatar) {
            setError('Avatar URL is required.');
            return;
        }

        // Monta o objeto para o backend
        const payload = {
            username: form.userName,
            email: form.email,
            password: form.password,
            avatar: form.avatar
        };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const data = await response.json();
            setError(data.message || 'Erro ao cadastrar usuário.');
            return;
        }
        setSuccess('Usuário cadastrado com sucesso!');
        setForm({
            userName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            avatar: ''
        });
        } catch (err) {
            setError(err.message || 'Erro ao conectar com o servidor.');
        }
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
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center bg-white overflow-auto w-full max-w-2xl mx-auto px-4"
                >
                    <div className='flex items-center mb-6 gap-4 justify-center w-full'>
                        {/* ...logo... */}
                    </div>
                    <div className="w-full">
                        <label htmlFor="userName" className="block mb-1 text-sm font-medium">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={form.userName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="confirmEmail" className="block mb-1 text-sm font-medium">Confirm your e-mail</label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={form.confirmEmail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="block mb-1 text-sm font-medium">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">Confirm your password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="avatar" className="block mb-1 text-sm font-medium">Avatar URL</label>
                        <input
                            type="text"
                            id="avatar"
                            name="avatar"
                            value={form.avatar}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-2"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded-lg transition duration-200 cursor-pointer mb-10"
                    >
                        Register
                    </button>
                    {/* Mensagens de erro e sucesso */}
                    {error && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center font-semibold w-full">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-center font-semibold w-full">
                            {success}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;