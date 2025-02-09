import { createContext , useContext, useState } from "react";
import { CartProps, product } from '../interfaces/CartProps'; 

export const CartContext = createContext({});

export const CartProvider = ({children}: {children: React.ReactNode}) => {

    const [numberCart, setNumberCart] = useState<number>(0);
    const [products, setProducts] = useState<product[]>([]);


    const cart:CartProps = {
        qtdProducts: numberCart,
        products: products,
        
        addCart({id, name, price, image}: product) {


            const exist = products.some(product => product.id === id);
            
            if (exist) {
                setProducts((prevProducts) => {
                    const newProducts = prevProducts.map((product) => {
                        if (product.id === id) {
                            return {...product, qtd: product.qtd + 1}
                        } else {
                            return product
                        }
                    })

                    return newProducts
                })
            }

            else {
                
                setProducts([...products, {
                    id: id,
                    name: name,
                    price: price,
                    qtd: 1,
                    image: image
                }])


                setNumberCart(numberCart + 1);
            }

        }


    }

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}


export const useContextCart = () => {
    const context:CartProps = useContext(CartContext);
    if (!context) {
      throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
  };
