module.exports = (sequelize, Sequelize) => {
    const petSpaceBook = sequelize.define("petSpaceBook", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pet_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pet_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      service_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      service: {
        type: Sequelize.TEXT,
        allowNull: true,
        get() {
          return JSON.parse(this.getDataValue("service"));
        },
        set(value) {
          return this.setDataValue("service", JSON.stringify(value));
        }
  
      },
      venue_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost_per_hour: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pet_space_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
       
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:true
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
  
    return petSpaceBook;
  };
  