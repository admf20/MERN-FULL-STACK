const { Router } = require('express');
const router = Router();

const { getUsers, CreateUser, DeleteUser } = require('../crontrollers/users.controller');

router.route('/')
            .get(getUsers)
            .post(CreateUser)

router.route('/:id')
            .delete(DeleteUser)

module.exports = router; 