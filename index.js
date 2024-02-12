const express = require('express');
const mongoose = require('mongoose');
const user = require('./model/user_model');
const getAll = require('./routes/getAll');
const signup = require('./routes/signup');
const login = require('./routes/login');
require('./config/mongo');

const PORT = process.env.PORT;


const app = express();
app.use(express.json());

//Routes 
app.get('/getall', getAll);
app.post('/signup', signup);
app.post('/login',login)


app.listen(PORT || 8000, () =>{
    console.log(`API is active at port : ${PORT}`)
})

