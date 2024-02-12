const user = require('../model/user_model');
const bcrypt = require('bcryptjs');


async function signup(req, res) {
    try {
        let newUser = new user({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            username: req.body.username,
            phone: req.body.phone
        })
        let data = await newUser.save();
        return res.status(200).json(data);

    } catch (err) {
        res.status(400).json({ error: `${err}` });
    }
};

module.exports = signup