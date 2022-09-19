import joi from 'joi';

const checkoutSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi.string().required(),
  products: joi
    .array()
    .items(
      joi.object({
        productId: joi.string().required(),
        amount: joi.number().required(),
      })
    )
    .required(),
  addressInfo: joi.object({
    address: joi.string().required(),
    number: joi.number().required(),
    complement: joi.string(),
    district: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    postalCode: joi.number().required(),
  }),
});

export { checkoutSchema };
