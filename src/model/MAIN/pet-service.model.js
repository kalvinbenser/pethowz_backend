module.exports = (sequelize, Sequelize) => {
    const petService = sequelize.define("pet_service", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      service_details: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      service:{
        type: Sequelize.JSON,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue("service"));
        }, 
        set(value) {
          return this.setDataValue("service", JSON.stringify(value));
        }
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image:{
        type: Sequelize.JSON,
        allowNull: false,
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
  
    return petService;
  };