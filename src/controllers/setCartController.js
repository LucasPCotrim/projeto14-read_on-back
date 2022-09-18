import db from '../database/mongodb.js'

async function setCart (req, res) {
    const userId = res.locals.user._id;
    const updateCart = res.locals.cart;
    try {
    const deleteCart = await db.collection('cart').deleteOne({ userId });
    const newCart = await db.collection('cart').insertOne({...updateCart, userId});
    if (!newCart) {
        return res.sendStatus(401);
    } 
    res.send(newCart)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export default setCart;