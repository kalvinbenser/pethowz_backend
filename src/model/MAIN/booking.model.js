module.exports = (sequelize, Sequelize) => {
  const booking = sequelize.define("booking", {
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
      type: Sequelize.JSON,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("service"));
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
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "1- pet space booking,2- pet service booking",
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

  return booking;
};
