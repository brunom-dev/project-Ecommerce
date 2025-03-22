import express from 'express';

const application = express();
const PORT = 3000;

application.use(express.json());

application.get("/produtos", async (request, response) => {

})

application.get("/produtos/:id", async (request, response) => {

})

application.post("/produtos", async (request, response) => {

})