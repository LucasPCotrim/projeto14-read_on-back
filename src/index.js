import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routes/authenticationRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import closeSessions from './intervals.js/closeSissions.js';
import cartRoutes from './routes/CartRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';

const MIN = 60 * 1000;
const HOUR = MIN * 60;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authenticationRoutes);
app.use(productsRoutes);
app.use(cartRoutes);
app.use(checkoutRoutes);

setInterval(() => {
  closeSessions(HOUR);
}, MIN);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
