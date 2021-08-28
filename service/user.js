const User = require("../models/").user;

const UserService = {
    create: (body) => {
        return User.create(body);
    },
    singUp: (body) => {
        return User.create(body);
    },
    signIn: (email, password) => {
        return User.findOne({where: {email: email, password: password}});
    },
    findAll: () => {
        return User.findAll();
    },
    findOne: (id) => {
        return User.findOne({where: {id: id}});
    }
}

module.exports = UserService
