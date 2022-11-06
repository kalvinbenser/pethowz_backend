module.exports = (sequelize, Sequelize) => {
  const serviceSlot = sequelize.define("service_slot", {
    service_master_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pet_service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cost: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      comment: "type- 1 ->pet space , type2 -> pet Service",
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:true
      },
    delStatus: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNUll: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });
  return serviceSlot;
};
