import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Add `.js` if using ESM
import userRoutes from './routes/userRoutes.js'; // Ensure userRoutes is imported
dotenv.config();

const app = express();

await connectDB(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', userRoutes); // Ensure userRoutes is imported

app.get('/', (req, res) => {
  res.send('Welcome to the React Form Handling Server!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
