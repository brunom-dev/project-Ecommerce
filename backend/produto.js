
import { prisma } from "./database.js";

async function searchProducts() {
    try {
        const products = await prisma.products.findMany();

        if (products.length === 0) {
            return { status: 404, message: "Nenhum produto encontrado." };
        }

        return { status: 200, data: products };
    }
    catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return { status: 500, message: "Erro interno ao buscar produtos." };
    }    
}

async function searchProduct(id) {
    try {
        const product = await prisma.products.findUnique({
            where: {id}
        })

        if (!product) {
            return { status: 404, message: "Produto não encontrado." };
        }

        return { status: 200, data: product };
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        return { status: 500, message: "Erro interno ao buscar produto." };
    }

}

async function registerProduct({name, image, price, rating, desc}) {

    try {
        const newProduct = await prisma.products.create({
            data: {
                name, 
                image,
                price,
                rating,
                desc
            }
        })   

        return { status: 201, message: "Produto cadastrado com sucesso!", data: newProduct};
    } catch(error) {
        if (error.code === 'P2025') {
            return { status: 404, message: "Produto não encontrado." };
        }
        console.error("Erro ao atualizar produto:", error);
        return { status: 500, message: "Erro interno ao atualizar produto." };
    }
    
}    

async function deleteProduct(id) {
    try {
        await prisma.products.delete({
            where: {id}
        })

        return { status: 200, message: "Produto deletado com sucesso!" };
    }
    catch (error) {
        if (error.code === 'P2025') {
            return { status: 404, message: "Produto não encontrado." };
        }

        console.error("Erro ao deletar Produto:", error);
        return { status: 500, message: "Erro interno ao deletar Produto." };
    }
} 

async function updateProduct(id, {name, image, price, rating, desc}) {
    try {
        const updateProduct = await prisma.products.update({
            data: {
                name, 
                image,
                price,
                rating,
                desc 
            },  
            where: {id}
        })

        return { status: 200, message: "Produto atualizado com sucesso!", data: updateProduct};
    }
    catch (error) {
        if (error.code === 'P2025') {
            return { status: 404, message: "Produto não encontrado." };
        }
        console.error("Erro ao atualizar item:", error);
        return { status: 500, message: "Erro interno ao atualizar item." };
    }
}

export {
    searchProduct,
    searchProducts,
    registerProduct,
    deleteProduct,
    updateProduct
}