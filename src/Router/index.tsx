import { createBrowserRouter } from "react-router-dom"

import { Layout } from "../components/Layout"

import { Home } from "../page/Home"
import { Products } from "../page/Products"
import { NotFound } from "../page/NotFound"


export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: `/products/:id`,
                element: <Products />
            },

            {
                path:'*',       
                element: <NotFound />
            }
        ],
    }
])