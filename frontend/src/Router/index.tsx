import { createBrowserRouter } from "react-router-dom"

import { Layout } from "../components/Layout"

import { Home } from "../page/Home"
import { Products } from "../page/Products"
import { NotFound } from "../page/NotFound"
import { Cart } from "../page/Cart"
import { Admin } from "../page/Admin"
import { Login } from "../page/Login"
import About from "../page/about/about"


export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: `/products/:id`,
                element: <Products />
            },
            {
                path : '/sobre',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login />
            },

            {
                path: `/admin`,
                element: <Admin />
            },

            {
                path:'*',       
                element: <NotFound />
            }
        ],
    }
])