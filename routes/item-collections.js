const ItemCollectionsService = require("../service/item-collections");
const bodyParser = require('body-parser');
const express = require("express");
const itemCollectionsRouter = express.Router();

itemCollectionsRouter.get("/:collectionId/list", (req, res) => {
    ItemCollectionsService.findAll(req.params.collectionId)
        .then(items => res.send(items));
});

itemCollectionsRouter.get("/:id", (req, res) => {
    ItemCollectionsService.findOne(req.params.id).then(collectionItem => res.send(collectionItem));
});

itemCollectionsRouter.post("/add", bodyParser.json(),(req, res) => {
    ItemCollectionsService.create(req.body)
        .then(result => {
            res.sendStatus(result ? 204 : 204);
        });
});

itemCollectionsRouter.delete("/delete/:id", (req, res) => {
    ItemCollectionsService.destroy(req.params.id)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 204);
        });
});

itemCollectionsRouter.put("/edit-items/:id", (req, res) => {
    ItemCollectionsService.edit(req.params.id, req.body)
        .then(result => {
            if (result) {
            res.send({...result.dataValues});
            } else {
                res.status(500)
            }
        });
});

itemCollectionsRouter.post("/like", (req, res) => {
    ItemCollectionsService.like(req.body.itemId, req.body.userId)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 204);
        });
})

itemCollectionsRouter.get("/likes/:itemId", (req, res) => {
    ItemCollectionsService.likes(req.params.itemId)
        .then(likes => res.send(likes));
})

module.exports = itemCollectionsRouter;
