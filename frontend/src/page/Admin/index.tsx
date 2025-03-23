import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../auth/auth";
import { UserCircle, LogOut } from "lucide-react";

import { Register } from "../../components/Admin/Register"
import { Update } from "../../components/Admin/Update"
import { Delete } from "../../components/Admin/Delete"
import { toast } from "react-toastify";


export function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate]);

    function handleLogout() {
        logout();
        toast.success("Sessão encerrada")
        navigate("/login");
    }

    const [action, setAction] = useState<"cadastrar" | "atualizar" | "deletar">("cadastrar");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="w-full max-w-4xl flex justify-between items-center bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center gap-4">
                    <UserCircle size={50} className="text-sky-500" />
                    <h2 className="text-3xl font-bold">
                        Painel do Administrador
                    </h2>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                    <LogOut size={20} />
                    Sair
                </button>
            </div>

            <div className="w-full max-w-4xl flex justify-center md:justify-start space-x-4 mb-6">
                <button
                    onClick={() => setAction("cadastrar")}
                    className={`flex-1 text-lg py-3 rounded-md ${
                        action === "cadastrar"
                            ? "bg-sky-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Cadastrar
                </button>
                <button
                    onClick={() => setAction("atualizar")}
                    className={`flex-1 text-lg py-3 rounded-md ${
                        action === "atualizar"
                            ? "bg-sky-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Atualizar
                </button>
                <button
                    onClick={() => setAction("deletar")}
                    className={`flex-1 text-lg py-3 rounded-md ${
                        action === "deletar"
                            ? "bg-sky-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Deletar
                </button>
            </div>


            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
                {action === "cadastrar" && <Register />}
                {action === "atualizar" && <Update />}
                {action === "deletar" && <Delete />}
            </div>
        </div>
    );
}
