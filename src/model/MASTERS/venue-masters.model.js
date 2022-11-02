module.exports = (sequelize, Sequelize) => {
    const venueCategory = sequelize.define("venue_category", {
        venue: {
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
  
    return venueCategory;
  };