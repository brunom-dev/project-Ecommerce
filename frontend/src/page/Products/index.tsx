import Styles from "./products.module.css"
import notFoundImage from "../../assets//images/notfound.svg"

import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"

import { Rating } from '../../components/Rating/index';
import { CartFloat } from "../../components/Cart/cartFloat";
import { Loading } from "../../components/Loading";

import { CartProps } from "../../interfaces/CartProps";
import { useContextCart } from "../../context/CartContext";

import { API } from "../../services/api";
import { CardProps } from "../../interfaces/CardProps"

export function Products() {

    const params = useParams()
    const [product, setProduct] = useState<CardProps | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const buscarProduto = async () => {

            await API.get(`/produtos/${params.id}`)
            .then((response) => {
                const dados = response.data.data;
                setProduct(dados);
            })
            .catch((erro) => {
                console.error(erro)
            })
            .finally(() => {
                setIsLoading(false); 
            })
        }

        buscarProduto()
    }, [])

    
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const cart:CartProps = useContextCart()

    return(
        <section className={Styles.container}>

            <div style={{position: "fixed", bottom: "0", right: "0"}}>
                <CartFloat />
            </div>

            {isLoading ? (
                <Loading />
            ) : product ? (
                <div className={Styles.card}>
                    <div className={Styles["image-card"]}>
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className={Styles["info-card"]}>
                        <h2>{product.name}</h2>
                        <div className={Styles.ratingContainer}>
                            ({product.rating.toFixed(1)})
                            <Rating stars={product.rating} />
                        </div>

                        <p className={Styles.price}>
                            {product.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>

                        <p
                            className="w-10/12 text-gray-700 overflow-hidden text-ellipsis break-words whitespace-normal"
                            style={
                                !isExpanded
                                    ? {
                                          display: "-webkit-box",
                                          WebkitBoxOrient: "vertical",
                                          WebkitLineClamp: 2,
                                          lineHeight: "1.5rem",
                                      }
                                    : { display: "inline" }
                            }
                        >
                            {product.desc}
                        </p>

                        <span
                            className="text-sky-500 cursor-pointer underline hover:text-sky-800 transition-all"
                            onClick={toggleExpand}
                        >
                            {!isExpanded ? "Ler mais" : "Ler menos"}
                        </span>

                        <div className="flex flex-col">
                            <button className="mt-5 px-2 py-3 w-4/4 bg-sky-400 text-white font-semibold text-base rounded-xl md:hover:scale-95 active:scale-105 transition-all duration-200">
                                Comprar
                            </button>

                            <button
                                className="mt-2 px-2 py-3 w-4/4 bg-orange-400 text-white font-semibold text-base rounded-xl md:hover:scale-95 active:scale-105 transition-all duration-200"
                                onClick={() => {
                                    cart.addCart({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        image: product.image,
                                    });
                                }}
                            >
                                Add carrinho
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center flex-col items-center w-full'>
                    <img src={notFoundImage} alt="ilustracao de personagem com caixa vazia" width={300} />
                    <p className='font-semibold text-2xl'>Produto não encontrado</p>
                </div>   
            )}
        </section>
    )
}