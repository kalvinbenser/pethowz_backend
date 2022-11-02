module.exports = (sequelize, Sequelize) => {
    const privacyPolicy = sequelize.define("privacy_policy", {
      content: {
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
  
    return privacyPolicy;
  };