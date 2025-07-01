import { useState } from "react";
import { getAuthHeaders } from "../utils/Api_auth.js";
import LoggedHeader from "../components/LoggedHeader";

export default function DashboardBooks() {
    const [books, setBooks] = useState([]);
    const [bookId, setBookId] = useState("");
    const [bookDetail, setBookDetail] = useState(null);
    const [newBook, setNewBook] = useState({ title: "", author: "" });
    const [error, setError] = useState("");
    const [createError, setCreateError] = useState("");
    const [createSuccess, setCreateSuccess] = useState("");

    // Buscar todos os livros
    const fetchAllBooks = () => {
        fetch("http://localhost:3000/books", {
            headers: getAuthHeaders()
        })
        .then(res => res.json())
        .then(data => setBooks(data));
    };

    // Criar novo livro
    const handleCreateBook = async (e) => {
        e.preventDefault();
        setCreateError("");
        setCreateSuccess("");
        try {
            const response = await fetch("http://localhost:3000/books", {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(newBook)
            });
            if (!response.ok) throw new Error("Erro ao criar livro");
            const created = await response.json();
            setBooks([...books, created]);
            setNewBook({ title: "", author: "" });
            setCreateSuccess("Livro criado com sucesso!");
        } catch (err) {
            setCreateError(err.message);
        }
    };

    // Buscar livro por ID
    const fetchBookById = () => {
        setBookDetail(null);
        setError("");
        fetch(`http://localhost:3000/books/${bookId}`, {
            headers: getAuthHeaders()
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.id) {
                setBookDetail(data);
            } else {
                setError("Livro não encontrado.");
            }
            setBookId("");
        })
        .catch(() => {
            setError("Erro ao buscar livro.");
            setBookId("");
        });
    };

    // Deletar livro
    const deleteBook = (id) => {
        fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
        })
        .then(() => setBooks(books.filter(b => b.id !== id)));
    };

    return (
    <>
        <LoggedHeader />
        <div className="container p-4">
            <h2 className="text-xl font-bold mb-4">Livros</h2>
            {/* Formulário para criar livro */}
            <form onSubmit={handleCreateBook} className="mb-6 w-full flex flex-col md:flex-row gap-2">
                <input
                    type="text"
                    placeholder="Título"
                    value={newBook.title}
                    onChange={e => setNewBook({ ...newBook, title: e.target.value })}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={newBook.author}
                    onChange={e => setNewBook({ ...newBook, author: e.target.value })}
                    className="border px-2 py-1 rounded"
                    required
                />
            <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">
                Criar Livro
            </button>
            </form>
            {createError && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center font-semibold">
                    {createError}
                </div>
            )}
            {createSuccess && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center font-semibold">
                    {createSuccess}
                </div>
            )}

            {/* Buscar livro por ID */}
            <div className="mt-8">
                <h3 className="font-semibold mb-2">Buscar livro por ID</h3>
                <input
                    type="text"
                    value={bookId}
                    onChange={e => setBookId(e.target.value)}
                    placeholder="ID do livro"
                    className="border px-2 mr-2"
                />
                <button onClick={fetchBookById} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">Buscar</button>
                <div style={{ minHeight: 50 }}>
                    {bookDetail && (
                        <div>
                            <strong>Título:</strong> {bookDetail.title}<br />
                            <strong>Autor:</strong> {bookDetail.author}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded flex align-center justify-center text-center font-semibold">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Buscar todos os livros */}
            <button
                onClick={fetchAllBooks}
                className="mb-4 mt-6 bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
            >
                Buscar todos os livros
            </button>
            {books.length > 0 && (
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded mb-8 text-sm">
                <thead>
                    <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Usuário Dono</th>
                    <th className="py-2 px-4 border-b">Título</th>
                    <th className="py-2 px-4 border-b">Autor</th>
                    <th className="py-2 px-4 border-b">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(b => (
                    <tr key={b.id} className="text-center">
                        <td className="py-2 px-4 border-b">{b.id}</td>
                        <td className="py-2 px-4 border-b">{b.userId}</td>
                        <td className="py-2 px-4 border-b">{b.title}</td>
                        <td className="py-2 px-4 border-b">{b.author}</td>
                        <td className="py-2 px-4 border-b">
                        <button
                            onClick={() => deleteBook(b.id)}
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