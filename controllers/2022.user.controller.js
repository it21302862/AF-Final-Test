const User = require('../model/2022.user.model');

const createUser = async(req,res)=>{
    try{
        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).send(newUser);
    }catch(err){
        res.send(400).json({message:err.message});
    }

};


const getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: "Error ", err });
    }
};

module.exports = {
    getUsers,
    createUser
}
