const { Router } = require('express');
const {
	addUser,
	listUser,
	updateUser,
	deleteUser,
} = require('./user.controller');
const { hashPassword, decryptPassword } = require('../middleware');
const userRouter = Router();

userRouter.post('/user', addUser);
userRouter.get('/user/:username', listUser);
userRouter.put('/user', updateUser);
userRouter.delete('/user/:username', deleteUser);

module.exports = userRouter;
