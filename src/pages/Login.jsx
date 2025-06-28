import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
            <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-8 rounded md:shadow-lg"
                >
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-6 gap-4">
                            <Link to="/" className="flex items-center gap-2">
                                <img
                                    src="/logo-icon-blue.svg"
                                    alt="Logo"
                                    className=""
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
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
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