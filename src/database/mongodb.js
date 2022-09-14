import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log('Database connected successfully!');
} catch (error) {
  console.log(error);
  console.error('Error when connecting to Database...');
}

const db = mongoClient.db(process.env.MONGO_DATABASE_NAME);

export default db;
