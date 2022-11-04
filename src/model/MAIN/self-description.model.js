module.exports = (sequelize, Sequelize) => {
    const selfDescription = sequelize.define("SelfDescription", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PetCategory: {
        type: Sequelize.TEXT,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue("PetCategory"));
        },
        set(value) {
          return this.setDataValue("PetCategory", JSON.stringify(value));
        }
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
  


