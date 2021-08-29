module.exports = (sequelize, Sequelize) => {
    return  sequelize.define("itemCollections", {
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
            type: Sequelize.LONGTEXT,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        collectionId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
}
