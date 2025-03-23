import { useState } from "react";
import { toast } from "react-toastify";

export function Delete() {
    const [id, setId] = useState<number | "">("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete = async () => {
        if (!String(id).trim()) {
            toast.error("Digite um ID válido.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao deletar produto.");
            }

            toast.success("Produto deletado com sucesso!");
            setId("");
        } catch (error) {
            toast.error("Erro ao deletar o produto.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Deletar Produto</h3>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="ID do produto"
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                    className="w-full p-3 border-2 border-sky-500 text-sky-600 font-bold rounded-md"
                    required
                />
                <button
                    onClick={handleDelete}
                    disabled={loading}
                    className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 disabled:bg-gray-400"
                >
                    {loading ? "Deletando..." : "Deletar Produto"}
                </button>
            </div>
        </div>
    );
}
