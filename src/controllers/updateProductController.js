import db from '../database/mongodb.js'
import { ObjectId } from "mongodb";

async function setProducts (req, res) {
    /* const user = res.locals.user; */
    const updateProduct = res.locals.product;
    try {
        const product = await db.collection('products')
            .updateOne({ _id: ObjectId(updateProduct.productId) }, { $set: { 
                amount: updateProduct.amount,
                rank: updateProduct.rank
             } });
    if (!product) {
        return res.sendStatus(401);
    }
    console.log(updateProduct)    
    res.send(product);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);  
    }
};

export default setProducts;