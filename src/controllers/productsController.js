
async function getProducts (req, res) {
    /* const user = res.locals.user; */

    try {
        const products = await db.collection('products').find();
    if (!products) {
        return res.sendStatus(401);
    }
        return res.send(products);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);  
    }
};

export default getProducts;