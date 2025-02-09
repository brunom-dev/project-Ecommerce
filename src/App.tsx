import { RouterProvider } from "react-router-dom"
import { Router } from './Router';
import { CartProvider } from "./context/CartContext";
import { ToastContainer, Zoom } from 'react-toastify';

export default function App() {
    return(
        <CartProvider>
            <RouterProvider router={Router}/>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </CartProvider>
    )
}