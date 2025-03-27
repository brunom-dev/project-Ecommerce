import { useEffect, useState } from "react";

import { CartFloat } from '../../components/Cart/cartFloat';
import { Card } from "../../components/Card"
import { ImageCarousel } from "../../components/ImageCarousel/index"
import { Loading } from "../../components/Loading"

import { API } from "../../services/api";
import { CardProps } from "../../interfaces/CardProps"


export function Home() {

    const [products, setProducts] = useState<CardProps[]>([])
    const [productsFilter, setProductsFilter] = useState<CardProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>("");
    
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

    useEffect(() => {
        if (searchText.trim().length === 0) {
            setProductsFilter(products); 
        } else {
            setProductsFilter(
                products.filter((product) => {
                    const nomeProduto = product.name.toLowerCase();
                    const letrasBusca = searchText.toLowerCase().split(""); 
                    return letrasBusca.every((char) => nomeProduto.includes(char)); 
                })
            );
        }
    }, [searchText, products]); 


    return(
        <section className="relative min-h-screen">

            <div className="flex justify-center items-center w-full mx-auto">
                <ImageCarousel />
            </div>

            <h1 className="md:text-5xl text-3xl font-medium pt-10 text-center">Conheça nossos produtos</h1>


            <div className="flex justify-center items-center w-full mt-4">
                <input 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        console.log(productsFilter)
                    }} 
                    placeholder="Buscar por produtos..." 
                    className="border-3 border-sky-500 px-2 py-2 w-10/12 text-xl rounded-md "
                />
            </div>


            <main className="relative flex gap-8 flex-wrap px-8 mt-10 justify-center">



                <div style={{position: "fixed", bottom: "0", right: "0", zIndex: 99999999}}>
                    <CartFloat />
                </div>

                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        productsFilter.length > 0 ? (
                                productsFilter.map(({ id, name, image, rating, price, desc }: CardProps) => (
                                    <Card
                                        id={id}
                                        name={name}
                                        price={price}
                                        image={image}
                                        rating={rating}
                                        desc={desc}
                                        key={id}
                                    />
                                ))
                            ) 
                            : 
                            (
                                <p className="font-bold text-2xl">Não há produtos disponíveis.</p>
                            )
                    )
                }

            </main>
        </section>
    )
}