const UserService = require("../service/user");
const bodyParser = require('body-parser');
const express = require("express");
const userRouter = express.Router();

userRouter.put("/create",  bodyParser.json(), (req, res) => {
    UserService.create(req.body)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 200);
        });
});

userRouter.put("/sing-up", bodyParser.json(), (req, res) => {
    UserService.singUp(req.body)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 200);
        });
});

userRouter.post("/sing-in", (req, res) => {
    UserService.signIn(req.body.email, req.body.password)
        .then(result => {
            if (result && result.dataValues) {
                res.send({...result.dataValues, password: null});
            } else {
                res.sendStatus(500);
            }
        }).catch(() => res.sendStatus(500));
});

userRouter.get("/", (req, res) => {
    UserService.findAll().then(items => res.send(items));
});

userRouter.get("/:id", (req, res) => {
    UserService.findOne(req.params.id).then(user => res.send(user));
});

module.exports = userRouter;
