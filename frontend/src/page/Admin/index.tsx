
import { useEffect } from "react"
import { isAuthenticated, logout }  from "../../auth/auth"
import { useNavigate } from 'react-router-dom';

export function Admin() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate])

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <div>
        <h2>Página do Administrador</h2>
        <p>Bem-vindo ao painel de administração!</p>
        <button onClick={handleLogout}>Sair</button>
        </div>
    )
}
