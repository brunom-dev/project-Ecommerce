import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { CartFloat } from '../../components/Cart/cartFloat';
import { Card } from "../../components/Card"
import { ImageCarousel } from "../../components/ImageCarousel/index"
import { Loading } from "../../components/Loading"

import { API } from "../../services/api";
import { CardProps } from "../../interfaces/CardProps"


export function Home() {

    const [products, setProducts] = useState<CardProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        async function buscarProdutos() {
            
            await API.get("/produtos")
            .then((response) => {
                const dados = response.data.data;
                setProducts(dados);
            })
            .catch((erro) => {
                console.log(erro)
            })
            .finally(() => setIsLoading(false))
        }
        buscarProdutos()
    }, [])


    function teste() {
        console.log(products)
    }

    return(
        <section className="relative">

            <div className="flex justify-center items-center w-full mx-auto" onClick={teste}>
                <ImageCarousel />
            </div>

            <h1 className="md:text-5xl text-3xl font-medium pt-10 text-center">Conheça nossos produtos</h1>


            <main className="relative flex gap-8 flex-wrap px-8 mt-10 justify-center">



                <div style={{position: "fixed", bottom: "0", right: "0", zIndex: 99999999}}>
                    <CartFloat />
                </div>

                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        products.length > 0 ? (
                            products.map(({ id, name, image, rating, price, desc }: CardProps) => (
                                <Link to={`/products/${id}`} style={{ color: '#000' }} key={id}>
                                    <Card
                                        id={id}
                                        name={name}
                                        price={price}
                                        image={image}
                                        rating={rating}
                                        desc={desc}
                                    />
                                </Link>
                            ))
                        ) : (
                            <p>Não há produtos disponíveis.</p>
                        )
                    )
                }

            </main>
        </section>
    )
}