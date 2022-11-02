module.exports = (sequelize, Sequelize) => {
    const petSpace = sequelize.define("pet_space", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue_category: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      amenities:{
        type: Sequelize.JSON,
        allowNull: false,
      },
      cost_per_hour: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      image:{
        type: Sequelize.JSON,
        allowNull: false,
      },
      service:{
        type: Sequelize.JSON,
        allowNull: true,
      },
      delStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment:"0 -> Pending; 1 -> Approval; 2 -> Rejected"
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
  
    return petSpace;
  };