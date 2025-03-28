import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, isAuthenticated } from '../../auth/auth.ts'

import Image from "../../assets/images/login/image-login.svg"
import { toast } from "react-toastify";

export function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/admin");
        }
    }, [navigate]);

    function handleLogin() {
        if (!username || !password) {
            setError('Preencha todos os campos');
            return;
        }

        const result = auth(username, password);

        if (result) {
            toast.success("Sessão iniciada");
            navigate("/admin");
        } else {
            setError('Acesso negado!');
        }
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-start">
            <div className="bg-white p-8 rounded-lg md:w-8/12 mt-10">
                <div className="mb-2 flex justify-center">
                    <img
                        src={Image}
                        alt="Imagem ilustrativa"
                        className="w-36 h-36 object-cover"
                    />
                </div>
                <h2 className="md:text-3xl text-2xl font-semibold text-center mb-6">
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

                <div className="mb-6 relative">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sky-500"
                    >
                        {isPasswordVisible ? "Ocultar" : "Revelar"}
                    </button>
                </div>

                {error && (
                    <p className="text-red-500 text-center mb-4 font-bold">
                        {error}
                    </p>
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
