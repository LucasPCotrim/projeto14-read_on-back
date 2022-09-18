import joi from 'joi';

const checkoutSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi.string().required(),
  products: joi
    .array()
    .items(
      joi.object({
        title: joi.string().required(),
        subtitle: joi.string(),
        description: joi.string().required(),
        img: joi.string().required(),
        author: joi.string().required(),
        price: joi.number().required(),
        amount: joi.number().required(),
      })
    )
    .required(),
  addressInfo: joi.object({
    address: joi.string().required(),
    number: joi.number().required(),
    complement: joi.string().required(),
    district: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    postalCode: joi.number().required(),
  }),
});

export { checkoutSchema };
