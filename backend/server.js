import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors'
const app=express();

dotenv.config();

connectDB();
let port = process.env.G_PORT||8080;

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/',authRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send(`<h1>Wecome to backend</h1>`)
})


app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})