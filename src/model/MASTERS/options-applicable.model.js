module.exports = (sequelize, Sequelize) => {
    const optionsApplicable = sequelize.define("options_applicable", {
        options: {
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
  
    return optionsApplicable;
  };