import { CartProps } from '../../interfaces/CartProps';
import { useContextCart } from '../../context/CartContext';
import { CartFloat } from '../../components/Cart/cartFloat';
import { Trash } from 'lucide-react';

import emptyImage from "../../assets/images/empty.svg"

export function Cart() {



    const cart:CartProps = useContextCart()

    const products = cart.products;

    return (
        <div className="flex flex-col gap-3 md:px-8 px-3 ">

            <div style={{position: "fixed", bottom: "0", right: "15px", zIndex: 99999999}}>
                <CartFloat />
            </div>

            <h1 className='text-center mt-5 mb-4 font-bold '>Carrinho de Compras</h1>
        {products.length > 0 ?
            products.map((product) => (
                <section className="flex justify-around items-center border-4 border-gray-200 md:hover:border-gray-500 transition-all duration-400 rounded-2xl py-3 px-2 md:flex-row flex-col" key={product.id}>
                    <div className='h-100'>
                        <img src={product.image} alt="miniatura do produto" className='md:h-24 h-0' />
                    </div>

                    <div className='md:block flex flex-col md:w-auto w-full'>
                        <h2 className='font-bold md:text-2xl md:w-auto w-full text-xl text-center'>{product.name}</h2>

                    </div>

                    <div className='md:block flex  md:justify-start md:w-auto  w-full gap-2 px-3 md:mt-0 my-2'>
                        <p className='font-medium text-center w-full'>
                            Quantidade: <strong  className='md:text-base text-sm'>{product.qtd}x</strong>
                        </p>

                        <p className='font-medium text-center w-full'>
                            Unidade: <strong  className='md:text-base text-sm'>
                                {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                    </strong>
                        </p>

                        <p className='font-medium text-center w-full'>Total: <strong className='md:text-base text-sm'>
                            {
                                    (product.price * product.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                                }
                            </strong>
                        </p>
                    </div>

                    <div className='sm:w-auto w-3/4'>
                        <button className='bg-red-600 text-white py-1 px-3 rounded-lg inline-flex gap-2 font-bold w-full flex justify-center active:scale-95 transition-all duration-200' onClick={() => cart.removeCart(product)}><Trash size={20}/> Remover</button>
                    </div> 
                </section>
            ))
        :
            <div className='flex justify-center flex-col items-center w-full '>
                <img src={emptyImage} alt="ilustracao de personagem com caixa vazia" width={300} />
                <p className='font-semibold text-2xl text-center'>Você não possui itens no carrinho.</p>
            </div>    
        }

        </div>
    )
}
