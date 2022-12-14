import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import "dotenv/config.js"
import { items } from './routes/items.js';

mongoose.set('strictQuery', true);
mongoose
.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
const db= mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
    console.log("database connected succesfully");
})

const app= express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.send("This is the admin page")
})
app.use('/api', items);

app.listen(5000, () => {
    console.log("Grab 'n' Pay is being served at http://localhost:5000");
})