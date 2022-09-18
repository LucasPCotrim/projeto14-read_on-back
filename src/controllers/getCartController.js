async function myCart (req, res) {
    const user = res.locals.user;
    
    try {
        const cart = await db.collection('cart').findOne({ userId: user._id });
        res.send(CartUser);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);  
    }
};

export default myCart;
