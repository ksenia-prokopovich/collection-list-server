const CommentsService = require("../service/comments");
const bodyParser = require('body-parser');
const express = require("express");
const commentsRouter = express.Router();

commentsRouter.post("/create", bodyParser.json(),(req, res) => {
    CommentsService.create(req.body)
        .then(result => {
           if (result) {
               res.send({...result.dataValues});
           } else {
               res.status(500);
           }
        });
});

commentsRouter.delete("/delete/:id", (req, res) => {
    CommentsService.destroy(req.params.id)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 204);
        });
});

commentsRouter.get("/:itemId", (req, res) => {
    CommentsService.findAll(req.params.itemId).then(comments => res.send(comments));
});

module.exports = commentsRouter;
