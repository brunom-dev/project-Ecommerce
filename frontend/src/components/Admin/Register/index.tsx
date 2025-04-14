// import { API } from "../../../services/api"

import { useState } from 'react'
import { toast } from 'react-toastify';
import { CardProps } from "../../../interfaces/CardProps";


export function Register() {

    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [image, setImage] = useState<string>(""); 
    const [price, setPrice] = useState<number>(0.01);
    const [loading, setLoading] = useState<boolean>(false);
    const rating = 4.5;
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      if (!name.trim() || !desc.trim() || Number(price) <= 0 || !image) return;
  
      setLoading(true);
      try {
        // const response = await API.post("/produtos", {
        //     name: name,
        //     desc: desc,
        //     image: image,
        //     price: price,
        //     rating: rating
        // })


        const productsCurrent = localStorage.getItem("@productsLocal");

        const products: CardProps[] = productsCurrent ? JSON.parse(productsCurrent) : [];

        const newProduct = {
            id: products.length + 1,
            name: name,
            desc: desc,
            image: image,
            price: price,
            rating: rating
        }

        products.push(newProduct);


        localStorage.setItem("@productsLocal", JSON.stringify(products));
        
        console.log(`Produto cadastrado: ${newProduct}`)
  
        toast.success("Produto cadastrado");
        setName("");
        setDesc("");
        setImage("");
        setPrice(0);
      } catch (error) {
        toast.error("Erro ao cadastrar.");
        console.log("Erro do cadastro: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Cadastrar Produto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nome do produto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    placeholder="Descrição"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="url"
                    placeholder="URL da imagem"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="number"
                    placeholder="Preço do produto"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    step="0.01"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 disabled:bg-gray-400"
                >
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
        </div>
    );
}
  