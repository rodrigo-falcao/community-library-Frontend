import { useState } from "react";
import { getAuthHeaders } from "../utils/Api_auth.js";
import LoggedHeader from "../components/LoggedHeader";

export default function DashboardLoans() {
    const [loans, setLoans] = useState([]);
    const [loanId, setLoanId] = useState("");
    const [loanDetail, setLoanDetail] = useState(null);
    const [newLoan, setNewLoan] = useState({ bookId: "", dueDate: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [errorLoanById, setErrorLoanById] = useState("");

    // Buscar todos os empréstimos
    const fetchAllLoans = () => {
        fetch("http://localhost:3000/loans", {
            headers: getAuthHeaders()
        })
        .then(res => res.json())
        .then(data => setLoans(data));
    };

    // Criar novo empréstimo
    const handleCreateLoan = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
        const response = await fetch("http://localhost:3000/loans", {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                bookId: Number(newLoan.bookId),
                dueDate: newLoan.dueDate
            })
        });
        if (!response.ok) throw new Error("Erro ao criar empréstimo");
        await response.json();
        setSuccess("Empréstimo criado com sucesso!");
        setNewLoan({ bookId: "", dueDate: "" });
    } catch (err) {
        setError(err.message);
    }
};

    // Buscar empréstimo por ID
    const fetchLoanById = () => {
        setLoanDetail(null);
        setErrorLoanById("");
        fetch(`http://localhost:3000/loans/${loanId}`, {
            headers: getAuthHeaders()
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.id) {
                setLoanDetail(data);
            } else {
                setErrorLoanById("Empréstimo não encontrado.");
            }
        })
        .catch(() => {
            setErrorLoanById("Erro ao buscar empréstimo.");
        });
    };

    // Deletar empréstimo
    const deleteLoan = (id) => {
        fetch(`http://localhost:3000/loans/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
        })
        .then(() => setLoans(loans.filter(l => l.id !== id)));
    };

    return (
        <>
        <LoggedHeader />
        <div className="container p-4">
            <h2 className="text-xl font-bold mb-4">Empréstimos</h2>
            {/* Formulário para criar empréstimo */}
            <form onSubmit={handleCreateLoan} className="mb-6 w-full flex flex-col md:flex-row gap-2">
                <input
                    type="number"
                    placeholder="ID do Livro"
                    value={newLoan.bookId}
                    onChange={e => setNewLoan({ ...newLoan, bookId: e.target.value })}
                    className="border px-1 rounded w-full md:flex-1"
                    required
                />
                <input
                    type="date"
                    placeholder="Data de Devolução"
                    value={newLoan.dueDate}
                    onChange={e => setNewLoan({ ...newLoan, dueDate: e.target.value })}
                    className="border px-1 rounded w-full md:flex-1"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-1 rounded w-full md:w-auto cursor-pointer"
                >
                    Criar Empréstimo
                </button>
            </form>
            {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center font-semibold">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center font-semibold">
                    {success}
                </div>
            )}
            
            {/* Buscar empréstimo por ID */}
            <div className="mt-8">
                <h3 className="font-semibold mb-2">Buscar empréstimo por ID</h3>
                <input
                    type="text"
                    value={loanId}
                    onChange={e => setLoanId(e.target.value)}
                    placeholder="ID do empréstimo"
                    className="border px-2 py-1 mr-2"
                />
                <button onClick={fetchLoanById} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">Buscar</button>
                <div style={{ minHeight: 110 }}>
                    {loanDetail && (
                        <div>
                        <strong>ID:</strong> {loanDetail.id}<br />
                        <strong>ID do Livro:</strong> {loanDetail.bookId}<br />
                        <strong>Data de Devolução:</strong> {loanDetail.dueDate}
                        </div>
                    )}
                    {errorLoanById && (
                        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mt-4 text-center font-semibold">
                            {errorLoanById}
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={fetchAllLoans}
                className="mb-4 mt-4 bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
            >
                Buscar todos os empréstimos
            </button>
            {/* Tabela de empréstimos */}
            {loans.length > 0 && (
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded mb-8 text-sm">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">ID do Livro</th>
                                <th className="py-2 px-4 border-b">Data de Devolução</th>
                                <th className="py-2 px-4 border-b">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loans.map(l => (
                                <tr key={l.id} className="text-center">
                                    <td className="py-2 px-4 border-b">{l.id}</td>
                                    <td className="py-2 px-4 border-b">{l.bookId}</td>
                                    <td className="py-2 px-4 border-b">{l.dueDate}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => deleteLoan(l.id)}
                                            className="text-red-600 cursor-pointer hover:underline "
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