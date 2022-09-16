import db from '../database/mongodb.js'

async function setProducts (req, res) {
    const product = res.locals.product;

    try {
        const newProduct = await db.collection('products').insertOne(product);
    if (!newProduct) {
        return res.sendStatus(401);
    }    
    res.send(newProduct);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export default setProducts;