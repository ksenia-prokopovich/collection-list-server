const Comments = require("../models/").comments;

const CommentsService = {
    create: (body) => {
        return Comments.create(body);
    },
    findAll: (itemId) => {
        return Comments.findAll({where: {itemId: itemId}});
    },
    destroy: (id) => {
        return Comments.destroy({where: {id: id}});
    },
}

module.exports = CommentsService
