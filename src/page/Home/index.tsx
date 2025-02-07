import { Card } from "../../components/Card"
import { CardProps } from "../../interfaces/CardProps"
import { useContextCart } from '../../context/CartContext';
import { CartProps } from "../../interfaces/CartProps";
import produtos from "../../assets/dados/index"


export function Home() {

    const cart:CartProps = useContextCart()

    return(
        <>
            <h1 className="text-5xl font-medium mt-10 text-center">Conheça nossos produtos</h1>

            <h1 className="text-5xl font-medium mt-10 text-center">Itens no carrinho: {cart.qtdProducts}</h1>

            <main className="flex gap-8 flex-wrap px-8 mt-10 justify-center">

                {
                    produtos.map(({id, name, image, rating, price, desc}:CardProps) => (
                        <Card 
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            image={image}
                            rating={rating}
                            desc={desc}
                        />
                    ))
                }

            </main>
        </>
    )
}