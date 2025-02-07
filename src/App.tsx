import { RouterProvider } from "react-router-dom"
import { Router } from './Router';
import { CartProvider } from "./context/CartContext";

export default function App() {
    return(
        <CartProvider>
            <RouterProvider router={Router}/>
        </CartProvider>
    )
}