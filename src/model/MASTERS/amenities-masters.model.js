module.exports = (sequelize, Sequelize) => {
    const amenitiesMaster = sequelize.define("amenities_category", {
      amenity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
  
    return amenitiesMaster;
  };