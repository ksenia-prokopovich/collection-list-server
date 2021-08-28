module.exports = (sequelize, Sequelize) => {
    return  sequelize.define("comments", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        message: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        itemId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
}
