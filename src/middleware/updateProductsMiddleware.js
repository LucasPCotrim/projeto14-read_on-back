import productSchema from '../schemas/validationProductsSchemas.js';

async function validationProducts(req, res, next) {
    const product = req.body;

    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        return res.sendStatus(401);
    }

    const { error: validError } = productSchema.validate(product);
    if (validError) {
        return res.status(422).send({ message: String(validError) });
    }

    res.locals.product = product;

    next();
}

export default validationProducts;