import { API } from "../../../services/api"

import { useState } from "react";
import { toast } from "react-toastify";

export function Update() {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<number | "">("");
    const [loading, setLoading] = useState<boolean>(false);
    const rating = 4.5;

    const handleUpdate = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!id.trim() || !name.trim() || !desc.trim() || Number(price) <= 0 || !image) {
            toast.error("Preencha todos os campos corretamente.");
            return;
        }

        setLoading(true);
        try {
            const response = await API.put(`/produtos/${id}`, {
                name: name,
                desc: desc,
                image: image,
                price: price,
                rating: rating
            })

            console.log("Produto atualizado: ", response.data);

            toast.success("Produto atualizado");
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
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Atualizar Produto</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    type="text"
                    placeholder="ID do produto"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full p-3 border-2 border-sky-500 text-sky-600 font-bold rounded-md"
                    required
                />
                <input
                    type="text"
                    placeholder="Novo nome do produto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    placeholder="Nova descrição"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="url"
                    placeholder="Nova URL da imagem"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="number"
                    placeholder="Novo preço"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? "Atualizando..." : "Atualizar"}
                </button>
            </form>
        </div>
    );
}
