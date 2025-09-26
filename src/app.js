import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/task.route.js';
import connectDB from './config/db.js';

// connect to database
connectDB();

// environment variables
dotenv.config();
const port = process.env.PORT || 3000;
const hostUrl = process.env.HOST_URL || 'http://localhost';


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// routes
app.use('/api/tasks', taskRoutes)

// error handling

// server
app.listen(port, () => { console.log(`connected to server ${hostUrl}:${port}`); })