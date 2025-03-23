import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../auth/auth.ts'

import Image from "../../assets/images/login/image-login.svg"
import { toast } from "react-toastify";

export function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    function handleLogin() {

        if (!username || !password) {

            setError('Preencha todos os campos');
            return;
        }

        const result = auth(username, password);

        if (result) {
            toast.success("Sessão iniciada")
            navigate("/admin");
        } else {
            setError('Acesso negado!')
        }
    }

    return (
            <div className="min-h-screen bg-gray-200 flex justify-center items-start">
            <div className="bg-white p-8 rounded-lg w-8/12 mt-10">
                <div className="mb-2 flex justify-center">
                    <img
                        src={Image}
                        alt="Imagem ilustrativa"
                        className="w-36 h-36 object-cover"
                    />
                </div>
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Acesso Administrativo
                </h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-center mb-4 font-bold">{error}</p>
                )}

                <div>
                    <button
                        onClick={handleLogin} 
                        className="w-full p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                        Entrar
                    </button>
                </div>
            </div>
            </div>
    );
}
