const userCtrl = {};

const UserModel = require('../models/users');

userCtrl.getUsers = async (req, res) => {
    const User = await UserModel.find();
    res.json(User);
};

userCtrl.CreateUser = async (req, res) => {
    const {username} = req.body;
    const NewUser = new UserModel({
        username: username
    });
    await NewUser.save();
    res.json({message: 'Usuario Guardado'})
};

userCtrl.DeleteUser = async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario Eliminado'})
};

module.exports = userCtrl;