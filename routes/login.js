const user = require('../model/user_model');
const bcrypt = require('bcryptjs');


async function login (req, res){
    if (req.body.email == '' || req.body.username == '') {
        return res.status(400).json({ response: 'You must provide email or username!' })
    } else {
        try {

            const newUser = await user.findOne({
                $or: [{ email: req.body.email }, { username: req.body.username }]
            });


            if (!newUser) {
                return res.status(400).json({
                    result: 'That user does not exist!'
                })
            } else if (user && bcrypt.compareSync(req.body.password, newUser.password)) {
                return res.status(200).json({newUser})
            } else {
                return res.status(400).json({ response: 'Wrong Password' })
            }

        } catch (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'Error  while logging in' });

        }

    }

}

module.exports = login