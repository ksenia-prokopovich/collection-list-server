module.exports = (sequelize, Sequelize) => {
    return  sequelize.define("like", {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        itemId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
