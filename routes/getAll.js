const user = require('../model/user_model');

async function getAll(req, res){
    try {
        let data = await user.find().select('-password');
        if (data != '') {
            return res.status(200).json(data);
        } else {
            return res.status(400).json({
                result: 'No data found in the Database'
            })
        }
        
    } catch (err) {
        return res.status(400).json({error : `${err}`})
    }
};

module.exports = getAll