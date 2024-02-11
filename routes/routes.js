const express = require('express');
const user = require('../model/user_model');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', async (req, res) => {
    let data = await user.find();
    console.log(data)
    if (data != '') {
        res.send(data);
    } else {
        res.send({
            result: 'No data found in the Database'
        })
    }
});

router.post('/signup', async (req, res) => {
    let newUser = new user({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        username: req.body.username,
        phone: req.body.phone
    })
    let data = await newUser.save();
    res.send(data);
});

router.post('/login', async (req, res) =>{
    const newUser = await user.findOne({
        $or : [{email : req.body.email}, {username : req.body.username}]});
    if (!newUser){
        res.send({
            result : 'That user does not exist!'
        })
    }else if (user && bcrypt.compareSync(req.body.password, newUser.password)){
        res.send({
            username : newUser.username,
            email : newUser.email,
            phone : newUser.phone
        })
    }else{
        res.send('Wrong Password')
    }

})


module.exports = router
