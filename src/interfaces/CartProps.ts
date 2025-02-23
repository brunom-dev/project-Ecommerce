
export interface CartProps {
    products: product[];
    qtdProducts: number;
    totalCart:number;
    addCart(cart: object): void;
    removeCart(id: number): void;
    finishCart(cart: CartProps): void;
}

export type product = {
    id: number
    name: string;
    price: number;
    qtd: number;
    image: string;
}

