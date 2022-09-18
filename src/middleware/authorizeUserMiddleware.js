import db from '../database/mongodb.js';

export async function authorizeUserMiddleware(req, res, next) {
  // Obtain user authentication token
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  // Verify if user authentication token was sent
  if (!token) return res.status(401).send({ message: 'Error: Invalid authentication token!' });

  try {
    // Check if a session matches the token
    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
      return res.status(401).send({ message: 'Error: Session timeout! Please log in again' });
    }
    // Obtain user from session
    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) {
      return res.status(401).send({ message: 'Error: User not found!' });
    }
    // Store user for next function
    res.locals.user = user;
    next();

    // Error when fetching user from session
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'An error occured when fetching user from session' });
  }
}
