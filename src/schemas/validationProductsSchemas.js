import joi from 'joi';

const productSchema = joi.object({
  productId: joi.string().required(),
  amount: joi.number().required(),
  rank: joi.number().required(),
});

export default productSchema;
/* import joi from 'joi';

const productSchema = joi.object({
  title: joi.string().required(),
  subTitle: joi.string().required(),
  description: joi.string().email().required(),
  img: joi.string().required(),
  autor: joi.string().required(),
  price: joi.number().required(),
  amount: joi.number().required(),
  rank: joi.number().required(),
  geners: joi
    .array()
    .items(
      joi
        .string()
        .valid(
          'Fantasia',
          'Ficcção Científica',
          'Ação e Aventura',
          'Romance',
          'Suspense',
          'Infantil',
          'Biografia',
          'História',
          'Religião',
          'Guias',
          'Arte e Fotografia',
          'Tecnologia e Ciência',
          'Gastronomia',
          'HQs'
        )
    ).required(),
});

export default productSchema; */