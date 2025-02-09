import { createContext , useContext, useState } from "react";
import { CartProps, product } from '../interfaces/CartProps'; 
import { toast } from "react-toastify";

export const CartContext = createContext({});

export const CartProvider = ({children}: {children: React.ReactNode}) => {

    const [numberCart, setNumberCart] = useState<number>(0);
    const [products, setProducts] = useState<product[]>([]);
    const [total, setTotal] = useState<number>(0);

    const cart:CartProps = {
        qtdProducts: numberCart,
        products: products,
        totalCart: total,
        
        addCart({id, name, price, image}: product) {
            const exist = products.some(product => product.id === id);
            
            if (exist) {
                setProducts((prevProducts) => {
                    const newProducts = prevProducts.map((product) => {
                        if (product.id === id) {
                            setTotal(total + product.price)
                            return {...product, qtd: product.qtd + 1}
                        } else {
                            return product
                        }
                    })

                    toast.info('+1 Unidade adicionada.')

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

                toast.info('Adicionado com sucesso!')
                setTotal(total + price);
                setNumberCart(numberCart + 1);
            }

        },

        removeCart(id: number) {
            setProducts((prevProducts) => {
                const newProducts = prevProducts.filter((product) => {
                    if (product.id === id) {
                        return setTotal(total - (product.price * product.qtd))
                    } else {
                        return product
                    }
                })

                toast.error('Removido com sucesso!')
                return newProducts
            })

            setNumberCart(numberCart - 1);
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
