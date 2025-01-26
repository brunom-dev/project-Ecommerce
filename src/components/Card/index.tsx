import styles from "./card.module.css"
import { Rating } from "../Rating";
import { CardProps } from "../../interfaces/CardProps";
import { Link } from "react-router-dom";


export function Card({id, name, price, rating, image}: CardProps) {
    return (
        <div className={styles.card} key={id}>
            <div className={styles.cardTop}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.cardBottom}>
                <p className="font-medium uppercase overflow-hidden whitespace-nowrap truncate">{name}</p>
                <Rating stars={rating}/>

                <p className="font-bold text-xl">
                    {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </p>

                <Link to={`/products/${id}`}>
                    <button className="mt-2 px-2 py-3 w-full bg-sky-400 text-white font-semibold text-lg rounded-xl hover:scale-95 transition-all duration-200" >
                    Comprar agora
                    </button>
                </Link>

                <button className="mt-2 px-2 py-3 w-full bg-orange-400 text-white font-semibold text-lg rounded-xl hover:scale-95 transition-all duration-200">
                    Add carrinho
                </button>
            </div>
        </div>
    );
}