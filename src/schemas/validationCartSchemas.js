import joi from 'joi';

const cartSchema = joi.object({
  idUser: joi.string().required(),
  products: joi
    .array()
    .items(
        joi.object({
            idProduct: joi.string().required(),
            amount: joi.number().required(),})
    ).required(),
});

export default cartSchema;