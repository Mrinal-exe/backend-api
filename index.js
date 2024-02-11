const express = require('express');
const mongoose = require('mongoose');
const user = require('./model/user_model');
require('./config/mongo');

const PORT = process.env.PORT;
const userRouter = require('./routes/routes')

const app = express();
app.use(express.json());
app.use(userRouter)



app.listen(PORT || 8000, () =>{
    console.log(`API is active at port : ${PORT}`)
})

