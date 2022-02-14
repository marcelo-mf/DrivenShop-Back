import db from "../db.js";

export async function getAll(req, res) {
    try{

        const products = await db.collection('products').find().toArray();

        res.send(products);

    } catch{
        res.sendStatus(500);
    }; 

}

export async function getProduct(req, res) {
    const productId = req.params.productId;
    console.log(productId);

    try{

        const product = await db.collection('products').findOne({id: productId});

        res.send(product);

    } catch{
        res.sendStatus(500);
    }; 

}