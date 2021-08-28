const ItemCollections = require("../models/").itemCollections;
const Like = require("../models/").like

const ItemCollectionsService = {
    findAll: (id) => {
        return ItemCollections.findAll({where: {collectionId: id}});
    },
    findOne: (id) => {
        return ItemCollections.findOne({where: {id}});
    },
    create: (body) => {
        return ItemCollections.create(body);
    },
    destroy: (id) => {
        return ItemCollections.destroy({where: {id}});
    },
    edit: (id, item) => {
        return ItemCollections.update(item, {where: {id}});
    },
    like: (itemId, userId) => {
        return Like.findOne({where: {itemId, userId}}).then(like => {
            if (like && like.dataValues) {
                return Like.destroy({where: {itemId, userId}})
            } else {
                return Like.create({itemId, userId})
            }
        })
    },
    likes: (itemId) => {
        return Like.findAll({where: {itemId}})
    }
}

module.exports = ItemCollectionsService
