import { Card } from "../../components/Card"
import { CardProps } from "../../interfaces/CardProps"
import { CartFloat } from '../../components/Cart/cartFloat';
import { ImageCarousel } from "../../components/ImageCarousel/index"

import produtos from "../../assets/dados/index"

export function Home() {

    return(
        <section className="relative">

            <div className="flex justify-center items-center">
                <ImageCarousel />
                
            </div>

            <h1 className="md:text-5xl text-3xl font-medium pt-10 text-center">Conheça nossos produtos</h1>


            <main className="relative flex gap-8 flex-wrap px-8 mt-10 justify-center">



                <div style={{position: "fixed", bottom: "0", right: "0", zIndex: 99999999}}>
                    <CartFloat />
                </div>

                {
                    produtos.map(({id, name, image, rating, price, desc}:CardProps) => (
                        <Card 
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            image={image}
                            rating={rating}
                            desc={desc}
                        />
                    ))
                }      

            </main>
        </section>
    )
}