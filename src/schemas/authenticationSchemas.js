import joi from 'joi';

const authSignUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  passwordConfirm: joi.any().valid(joi.ref('password')).required(),
  favGenres: joi
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
    ),
});

export { authSignUpSchema };
