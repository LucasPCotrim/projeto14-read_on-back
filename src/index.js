import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routes/authenticationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authenticationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
