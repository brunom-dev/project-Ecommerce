import { useState } from "react";
import { useParams } from "react-router-dom"


import { Rating } from '../../components/Rating/index';

import produtos from '../../assets/dados/index';
import Styles from "./products.module.css"
<<<<<<< HEAD
import { CartProps } from "../../interfaces/CartProps";
import { useContextCart } from "../../context/CartContext";
import { Cart } from "../../components/Cart";
=======
>>>>>>> dfc5de60722f968c7f3c930d0aae769f6c501c43


export function Products() {

    const params = useParams()
    
    const produto = produtos.find((produto) => {
        return produto.id == Number(params.id)
    })
    
<<<<<<< HEAD
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
=======
    const [isExpanded, setIsExpanded] = useState(false);
>>>>>>> dfc5de60722f968c7f3c930d0aae769f6c501c43

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
<<<<<<< HEAD

    const cart:CartProps = useContextCart()

    return(
        <section className={Styles.container}>

            <div style={{position: "fixed", bottom: "0", right: "0"}}>
                <Cart />
            </div>

=======

    return(
        <section className={Styles.container}>
>>>>>>> dfc5de60722f968c7f3c930d0aae769f6c501c43
            <div className={Styles.card}>
                <div  className={Styles['image-card']}>
                    <img src={produto?.image} alt=""/>
                </div>


                <div className={Styles['info-card']}>
                    <h2>{produto?.name}</h2>
                    <div className={Styles.ratingContainer}>
                        ({(produto?.rating)?.toFixed(1)})
                        <Rating stars={produto?.rating} />
                    </div>
                    
                    <p className={Styles.price}>{produto?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

                    <p 
                        className="w-10/12 text-gray-700 overflow-hidden text-ellipsis break-words whitespace-normal"  
                        style={
                            !isExpanded ?
                            {
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                lineHeight: '1.5rem',
                            }
                            :
                            {
                                display: 'inline',
                            }
                        }    
                     >
                        {produto?.desc} 
                    </p>

                    <span className="text-sky-500 cursor-pointer underline hover:text-sky-800 transition-all" onClick={toggleExpand}>{!isExpanded ? "Ler mais" : "Ler menos"}</span>
                    

                    <div className="flex flex-col">
                        <button className="mt-5 px-2 py-3 w-4/4 bg-sky-400 text-white font-semibold text-base rounded-xl hover:scale-95 transition-all duration-200 " >
                            Comprar
                        </button>

<<<<<<< HEAD
                        <button className="mt-2 px-2 py-3 w-4/4 bg-orange-400 text-white font-semibold text-base rounded-xl hover:scale-95 transition-all duration-200"
                            onClick={() => {
                                cart.addCart({
                                    id: produto?.id,
                                    name: produto?.name ,
                                    price: produto?.price,
                                })
                            }
                            }
                        >
=======
                        <button className="mt-2 px-2 py-3 w-4/4 bg-orange-400 text-white font-semibold text-base rounded-xl hover:scale-95 transition-all duration-200">
>>>>>>> dfc5de60722f968c7f3c930d0aae769f6c501c43
                            Add carrinho
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}