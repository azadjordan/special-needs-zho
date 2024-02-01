import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

import signRoutes from './routes/signRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5500;

// Connect to Database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// log every request
app.use((req, res, next) => {
  console.log(`PATH: [${req.path}]      METHOD: [${req.method}]`);
  next();
});

// cookie parser middleware
app.use(cookieParser());

app.use("/api/signs", signRoutes)
app.use('/api/images', imageRoutes);
app.use("/api/users", userRoutes)



app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
