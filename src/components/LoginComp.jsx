import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginComp = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Lado esquerdo: cor primária */}
            <div className="hidden md:block md:w-1/2 bg-blue-900">
            <div className="flex items-center justify-center h-full text-white gap-4"> 
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo-icon-white.svg" alt="" />
                    <h2>Community Library</h2>
                </Link>
            </div>
            </div>

            {/* Lado direito: formulário de login */}
            <div className="w-full md:w-1/2 h-screen flex items-center justify-center flex-col bg-white">
                    <h2 className="text-2xl font-bold text-black mb-2 text-center">
                        Welcome back to <span className='text-blue-900'>Library Community!</span>
                    </h2>
                    <p className="text-black mb-6 text-center">
                        Enter your credentials below to <span className='text-blue-900'>log in</span> <br/>and access your account.
                    </p>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-8 rounded md:shadow-lg"
                >
                    <div className="">
                        <div className="flex items-center mb-6 gap-4">
                            <Link to="/" className="flex items-center justify-center mb-6 gap-4 w-full">    
                                <img
                                    src="/logo-icon-blue.svg"
                                    alt="Logo"
                                    className="logo-library"
                                />
                                <h1>Community Library</h1>
                            </Link>
                        </div>
                        <h2 className="text-2xl mb-2 text-center">Login</h2>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium" htmlFor="usuario">
                                Usuário
                            </label>
                            <input
                                id="usuario"
                                type="text"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium" htmlFor="senha">
                                Senha
                            </label>
                            <input
                                id="senha"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-4"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full button secondary py-2 rounded font-semibold"
                        >
                            Entrar
                        </button>
                    </div>
                    <div className="flex justify-between mt-6 text-sm">
                        <Link to="/register" className="text-primary hover:underline">
                            Criar uma conta
                        </Link>
                        <Link to="/forgot-password" className="text-primary hover:underline">
                            Esqueci minha senha
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default LoginComp;