import cartSchema from '../schemas/validationCartSchemas.js';

async function validationCart(req, res, next) {
    const user = res.locals.user;
    const updateCart = req.body;

    const { error: validError } = cartSchema.validate(updateCart);
    if (validError) {
        return res.status(422).send({ message: String(validError) });
    }

    res.locals.cart = updateCart;

    next();
}

export default validationCart;