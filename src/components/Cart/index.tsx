import { useContextCart } from "../../context/CartContext";
import { CartProps } from "../../interfaces/CartProps";
import { ShoppingCart } from "lucide-react"; 

export function Cart() {


    const cart:CartProps = useContextCart()

    return(
        <button
            className="fixed bottom-6 right-6 bg-sky-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative hover:bg-sky-600 transition"
        >
            <ShoppingCart size={30} />

            {
                <span 
                    className="absolute -top-0 -right-1 bg-orange-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center"
                >
                    {cart.qtdProducts}
                </span>
            }
        </button>
    )
}