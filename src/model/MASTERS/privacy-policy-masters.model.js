module.exports = (sequelize, Sequelize) => {
    const privacyPolicy = sequelize.define("privacy_policy", {
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
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
  
    return privacyPolicy;
  };