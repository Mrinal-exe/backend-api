const mongoose = require('mongoose');
require('dotenv').config();

URI = process.env.URI

mongoose.connect(URI).then(() =>{
    console.log('Successfully connected to Database.')
}).catch(err => console.log(err.message));