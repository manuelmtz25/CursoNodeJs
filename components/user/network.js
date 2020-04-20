const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    controller
        .getUsers()
        .then((usersList) => {
            response.success(req, res, usersList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
});

router.post('/', function (req, res) {
    controller
        .addUser(req.body.name)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch((err) => {
            response.error(req, res, data, 'Internal error', 500, err);
        });
});

module.exports = router;
