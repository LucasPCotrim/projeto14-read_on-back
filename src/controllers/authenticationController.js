import db from '../database/mongodb.js';
import { authSignUpSchema } from '../schemas/authenticationSchemas.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function userSignUp(req, res) {
  // Obtain user
  const user = req.body;

  // Validate user
  const { error: validError } = authSignUpSchema.validate(user);
  if (validError) {
    return res.status(422).send({ message: String(validError) });
  }

  try {
    // Check if email is already registered
    const checkExistingEmail = await db.collection('users').findOne({ email: user.email });
    if (checkExistingEmail) {
      return res.status(409).send({ message: 'Error: Invalid email address!' });
    }

    // Insert user into Database
    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection('users').insertOne({
      name: user.name,
      email: user.email,
      password: passwordHash,
      favGenres: user.favGenres,
    });
    return res
      .status(201)
      .send({ message: 'Succesful sign-up', user: { name: user.name, email: user.email } });

    // Error during Sign Up
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'An error occured during user sign-up!' });
  }
}
