const express = require("express");
const dotenv = require("dotenv");
const {chats}=require("./data/data")
const connectDB = require("./config/db");





dotenv.config()
connectDB()

const app = express()
app.get('/',(req,res) =>{
    res.send("API is running");
})

app.get('/api/chat',(req,res) =>{
    res.send(chats);
})
app.get('/api/chat/:id',(req,res) =>{
    // res.send(chats);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
})


const PORT = process.env.PORT||5000
app.listen(PORT,console.log(`Server started on port ${PORT}`));

