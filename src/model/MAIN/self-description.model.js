module.exports = (sequelize, Sequelize) => {
    const selfDescription = sequelize.define("SelfDescription", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PetCategory: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      content1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      content6: {
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
      },
    });
  
    return selfDescription;
  };
  


