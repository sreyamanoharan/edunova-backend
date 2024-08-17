import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import userRouter from './Routes/Routes.js';

const app = express();
const port = 3000;
const dbUrl = 'mongodb+srv://aswinachuz894:Aswinmongodbatles@cluster0.cvp4dws.mongodb.net/edunova';

app.use(cors({
   origin: ["http://localhost:5173"],
   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
app.use(express.json()); 

app.use('/', userRouter);

mongoose.connect(dbUrl).then(result=>{
  console.log('mongo db connected');
}).catch(err=>{
  console.log(err);
});

const server=app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});