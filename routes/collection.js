const CollectionService = require("../service/collection");
const bodyParser = require('body-parser');
const express = require("express");
const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
    CollectionService.findAll().then(items => res.send(items));
});

collectionRouter.get("/:id", (req, res) => {
    CollectionService.findOne(req.params.id).then(item => res.send(item));
});

collectionRouter.post("/add", bodyParser.json(), (req, res) => {
    CollectionService.create(req.body)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 200);
        });
});

collectionRouter.delete("/delete/:id", (req, res) => {
    CollectionService.destroy(req.params.id)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 204);
        });
});

collectionRouter.put("/edit-collection/:id", (req, res) => {
    console.log(req.body)
    CollectionService.edit(req.params.id, req.body)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 200)
        });
});

module.exports = collectionRouter;
