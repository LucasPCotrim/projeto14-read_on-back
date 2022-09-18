import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routes/authenticationRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authenticationRoutes);
app.use(checkoutRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
