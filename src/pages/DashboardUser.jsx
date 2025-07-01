import { useState } from "react";
import { getAuthHeaders } from "../utils/Api_auth";
import LoggedHeader from "../components/LoggedHeader";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const [userDetail, setUserDetail] = useState(null);
    const [createError, setCreateError] = useState("");
    const [createSuccess, setCreateSuccess] = useState("");
    const [searchError, setSearchError] = useState("");

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        avatar: ""
    });

    // Função para criar um novo usuário
    const handleCreateUser = async (e) => {
        e.preventDefault();
        setCreateError("");
        setCreateSuccess("");
        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    ...getAuthHeaders(),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });
        if (!response.ok) throw new Error("Erro ao criar usuário");
            setCreateSuccess("Usuário criado com sucesso!");
            setNewUser({ username: "", email: "", password: "", avatar: "" });
        } catch (err) {
                setCreateError(err.message);
        }
    };
    
    // Função para buscar todos os usuários
    const fetchAllUsers = () => {
        fetch("http://localhost:3000/users", {
            headers: getAuthHeaders()
        })
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                setUsers(data);
            } else if (Array.isArray(data.users)) {
                setUsers(data.users);
            } else {
                setUsers([]);
            }
        });
    };

    // Buscar usuário por ID usando o valor do input
    const fetchUserById = async () => {
        setSearchError("");
        setUserDetail(null);
        try {
            const res = await fetch(`http://localhost:3000/users/${userId}`, {
                headers: getAuthHeaders()
            });
            const data = await res.json();
            if (!data.user) {
                setSearchError("Usuário não encontrado.");
            } else {
                setUserDetail(data.user);
            }
            setUserId("");
        } catch {
            setSearchError("Erro ao buscar usuário.");
            setUserId("");
        }
    };

    // Deletar usuário
    const deleteUser = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
            headers: getAuthHeaders()
        })
        .then(() => setUsers(users.filter(u => u.id !== id)));
    };

    return (
        <>
        <LoggedHeader />
        <div className="container p-4">
            <h2 className="text-xl font-bold mb-4">Usuários</h2>
            <form onSubmit={handleCreateUser} className="mb-6 flex flex-col justify-between md:flex-row gap-2">
                <input
                    type="text"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={e => setNewUser({ ...newUser, username: e.target.value })}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Avatar URL"
                    value={newUser.avatar}
                    onChange={e => setNewUser({ ...newUser, avatar: e.target.value })}
                    className="border px-2 py-1 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">
                    Criar usuário
                </button>
            </form>
            {createError && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center font-semibold">
                    {createError}
                </div>
            )}
            {createSuccess && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-center font-semibold">
                    {createSuccess}
                </div>
            )}
            <div className="mt-8">
                <h3 className="font-semibold mb-2 cursor-pointer">Buscar usuário por ID</h3>
                <input
                    type="text"
                    value={userId}
                    onChange={e => {
                        setUserId(e.target.value);
                        setUserDetail(null); 
                        setSearchError("");
                    }}
                    placeholder="ID do usuário"
                    className="border px-2 py-1 mr-2"
                />
                <button onClick={fetchUserById} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">Buscar</button>
                {userDetail && (
                    <div className="mt-4">
                        <strong>Nome:</strong> {userDetail.username}<br />
                        <strong>Email:</strong> {userDetail.email}
                    </div>
                )}
                {searchError && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mt-4 text-center font-semibold">
                        {searchError}
                    </div>
                )}
            </div>
            <button
                onClick={fetchAllUsers}
                className="mt-8 mb-8 bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
                >
                Buscar todos os usuários
            </button>
            {users.length > 0 && (
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded mb-8 text-sm">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Avatar</th>
                                <th className="py-2 px-4 border-b">Username</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id} className="text-center">
                                    <td className="py-2 px-4 border-b">{u.id}</td>
                                    <td className="py-2 px-4 border-b">
                                        <img src={u.avatar} alt={u.avatar} className="w-10 h-10 rounded-full mx-auto" />
                                    </td>
                                    <td className="py-2 px-4 border-b">{u.username}</td>
                                    <td className="py-2 px-4 border-b">{u.email}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => deleteUser(u.id)}
                                            className="text-red-600 cursor-pointer hover:underline"
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        </>
    );
}