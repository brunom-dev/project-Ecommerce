import { API } from "../../../services/api"
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
            const response = await API.delete(`/produtos/${id}`)

            console.log("Produto deletado", response.data);
            toast.success("Produto deletado");
            setId("");
        } catch (error: unknown) {
        
            if (typeof error === "object" && error !== null && "response" in error) {
                const err = error as { response: { status: number; data?: unknown } };
        
                console.error("Erro do servidor:", err.response.status, err.response.data);
        
                switch (err.response.status) {
                    case 400:
                        toast.error("Requisição inválida.");
                        break;
                    case 401:
                        toast.error("Não autorizado.");
                        break;
                    case 403:
                        toast.error("Acesso proibido.");
                        break;
                    case 404:
                        toast.error("Produto não encontrado.");
                        break;
                    case 500:
                        toast.error("Erro interno do servidor.");
                        break;
                }
            }
        }
        
         finally {
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
