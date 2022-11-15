module.exports = (sequelize, Sequelize) => {
    const serviceMaster = sequelize.define("service_master", {
        
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    });

    return serviceMaster;
};