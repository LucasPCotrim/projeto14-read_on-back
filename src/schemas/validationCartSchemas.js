import joi from 'joi';

const cartSchema = joi.object({
  products: joi
    .array()
    .items(
        joi.object({
            productId: joi.string().required(),
            amount: joi.number().required(),})
    ).required(),
});

export default cartSchema;