import db from '../database/mongodb.js'

async function setCart (req, res) {
    const user = res.locals.user;
    const updateCart = res.locals.updateCart;

    try {
        const cart = await db.collection('cart').deleteOne({ userId: user._id });

        const newCart = await db.collection('cart').insertOne(updateCart);
    if (!newCart) {
        return res.sendStatus(401);
    }    
    res.send(newCart);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export default setCart;