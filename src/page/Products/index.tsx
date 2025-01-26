import { useState } from "react";
import { useParams } from "react-router-dom"


import { Rating } from '../../components/Rating/index';

import produtos from '../../assets/dados/index';
import Styles from "./products.module.css"


export function Products() {

    const params = useParams()
    
    const produto = produtos.find((produto) => {
        return produto.id == Number(params.id)
    })
    
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <section className={Styles.container}>
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

                        <button className="mt-2 px-2 py-3 w-4/4 bg-orange-400 text-white font-semibold text-base rounded-xl hover:scale-95 transition-all duration-200">
                            Add carrinho
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}