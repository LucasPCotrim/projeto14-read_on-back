import db from '../database/mongodb.js';
import dayjs from 'dayjs';
import checkoutSchema from '../schemas/checkoutSchemas.js';

export async function registerSale(req, res) {
  // Obtain user
  const { user } = res.locals;

  // Obtain checkout information
  const { name, email, cpf, products, addressInfo } = req.body;

  // Validate checkout
  const { error: validError } = checkoutSchema.validate({
    name,
    email,
    cpf,
    products,
    addressInfo,
  });
  if (validError) {
    return res.status(422).send({ message: String(validError) });
  }

  try {
    // Insert sale into Database
    await db.collection('sales').insertOne({
      name,
      email,
      cpf,
      products,
      addressInfo,
      date: dayjs().format('DD/MM'),
      userId: user._id,
    });
    res.status(200).send({ message: 'Sale successful!' });

    // Error when registering sale
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'An error occured when registering sale' });
  }
}
