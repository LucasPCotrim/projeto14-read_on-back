import db from '../database/mongodb.js';
import productSchema from '../schemas/validationProducts.js';

async function validationProducts(req, res, next) {
    const { title } = req.body;
    const product = req.body;

    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        return res.sendStatus(401);
    }

    const products = await db.collection('products').findOne({ title });
    if (products) {
        return res.status(409).send('Item já cadastrado!');
    }

    const { error: validError } = productSchema.validate(product);
    if (validError) {
        return res.status(422).send({ message: String(validError) });
    }

    res.locals.product = product;

    next();
}

export default validationProducts;