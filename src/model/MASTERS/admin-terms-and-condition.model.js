module.exports = (sequelize, Sequelize) => {
    const adminTermsAndCondition = sequelize.define("admin_terms_and_condition", {
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
  
    return adminTermsAndCondition;
  };