
export interface CartProps {
    products: product[];
    qtdProducts: number;
    addCart(cart: object): void
}

export type product = {
    id: number
    name: string;
    price: number;
    qtd: number;
}

