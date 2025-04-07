const express = require('express')
const cors =require('cors')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const app=express();

dotenv.config();

const PORT=process.env.PORT||8080

app.use(cors())
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})