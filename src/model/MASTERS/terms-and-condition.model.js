module.exports = (sequelize, Sequelize) => {
    const termsAndCondition = sequelize.define("terms_and_condition", {
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
  
    return termsAndCondition;
  };