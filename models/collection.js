module.exports = (sequelize, Sequelize) => {
    return  sequelize.define("collection", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.TEXT('long'),
            allowNull: true
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: true,
        },
        userId: {
            type: Sequelize.INTEGER,
        }
    });
}
