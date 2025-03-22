import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export class databasePg {

    async searchProducts() {
        try {
            return await prisma.products.findMany();
        }
        catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return null;
        }
    }

    async searchProduct(id) {

        if (!id) {
            console.error("Id invalido.");
            return null;
        }

        try {
            return await prisma.products.findUnique({
                where: {id}
            })
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            return null;
        }

    }

    async registerProduct({name, image, price, rating, desc}) {

        try {
            return await prisma.products.create({
                data: {
                    name, 
                    image,
                    price,
                    rating,
                    desc
                }
            })   
        } catch(error) {
            console.error("Erro ao cadastrar produto:", error);
            return null
        }
     
    }    


}