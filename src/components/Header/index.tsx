import { Link } from "react-router-dom"


export function Header() {
    return(
        <header className="flex justify-evenly py-12 bg-sky-600 text-white">
            <h2 className="font-bold text-3xl">Web Comercio</h2>

            <ul className="flex gap-10 text-2xl font-semibold">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/products"}>Produtos</Link>                
                <a href="#">Contato</a>
            </ul>
        </header>
    )
}