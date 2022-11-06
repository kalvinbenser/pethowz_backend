module.exports = (sequelize, Sequelize) => {
  const petSpace = sequelize.define("pet_space", {
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    venue_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    venue_category: {
      type: Sequelize.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("venue_category"));
      },
      set(value) {
        return this.setDataValue("venue_category", JSON.stringify(value));
      },
    },
    amenities: {
      type: Sequelize.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("amenities"));
      },
      set(value) {
        return this.setDataValue("amenities", JSON.stringify(value));
      },
    },
    cost_per_hour: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("image"));
      },
      set(value) {
        return this.setDataValue("image", JSON.stringify(value));
      },
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
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      comment: "0 -> Pending; 1 -> Approval; 2 -> Rejected",
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

  return petSpace;
};
