import db from '../database/mongodb.js'

async function getProducts (req, res) {
    /* const user = res.locals.user; */

    try {
        const products = await db.collection('products').find().toArray();
    if (!products) {
        return res.sendStatus(401);
    }
    console.log(products)    
    res.send(products);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);  
    }
};

export default getProducts;