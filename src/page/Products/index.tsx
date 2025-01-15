import { useParams } from "react-router-dom"
import produtos from '../../assets/dados/index';

export function Products() {

    const params = useParams()
    
    const produto = produtos.find((produto) => {
        return produto.id == Number(params.id)
    })

    return(
        <>
            <h1>Pagina Products</h1>
            <h2 className="font-semibold text-3xl">
                ID: {produto?.id} <br />
                Nome: {produto?.name} <br />
                Preco: {produto?.price} <br />
                Avaliacao: {produto?.rating} <br />
            </h2>
        </>
    )
}