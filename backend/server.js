import express from 'express';
import cors from 'cors'

import {
    searchProduct,
    searchProducts,
    deleteProduct,
    registerProduct,
    updateProduct
} from "./produto.js"


const application = express();
const PORT = 3000;

application.use(express.json());
application.use(cors());

application.get("/produtos", async (request, response) => {
    const products = await searchProducts();
    response.contentType("application/json");
    return response.status(products.status).json(products)
})

application.get("/produtos/:id", async (request, response) => {
    const { id } = request.params;

    const product = await searchProduct(Number(id));

    response.contentType("application/json")
    return response.status(product.status).json(product)
})

application.post("/produtos", async (request, response) => {
    const newProduct = await registerProduct(request.body)

    response.contentType("application/json")
    return response.status(newProduct.status).json(newProduct)
})

application.put("/produtos/id:", async (request, response) => {

    const { id } = request.params;

    const newProduct = await updateProduct(Number(id), request.body);

    return response.status(newProduct.status).send(newProduct)
})

application.delete("/produtos/id:", async (request, response) => {
    const { id } = request.params;

    const result = await deleteItem(Number(id))

    return response.status(result.status).send(result)
})

application.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})