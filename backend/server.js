import express from 'express';
import cors from 'cors'
import { databasePg } from './database.js'


const application = express();
const PORT = 3000;

application.use(express.json());
application.use(cors());

const database = new databasePg();

application.get("/produtos", async (request, response) => {
    try { 
        const products = await database.searchProducts();
        return response.status(200).contentType("application/json").send(JSON.stringify(products));
    }
    catch(error) {
        response.status(500).send({error: "Erro ao buscar produtos"});
    }
})

application.get("/produtos/:id", async (request, response) => {
    const { id } = request.params;

    const product = await database.searchProduct(Number(id));

    if (!product) {
        return response.status(404).send({error: "Produto não encontrado"});
    }

    return response.status(200).contentType("application/json").send(JSON.stringify(product))
})

application.post("/produtos", async (request, response) => {

    const newProduct = await database.registerProduct(request.body)

    if (!newProduct) {
        return response.status(500).send({ error: "Erro ao cadastrar produto" });
    }

    return response.status(201).send(newProduct)
})


application.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})