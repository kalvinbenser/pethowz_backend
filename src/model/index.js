const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: true,
    freezeTableName: true, //To avoid plurals while creating table name
  },
  operatorsAliases: 0,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.PetCategory = require("./MASTERS/pet-category.model")(sequelize, Sequelize);
db.venueCategory = require("./MASTERS/venue-masters.model")(
  sequelize,
  Sequelize
);
db.optionsApplicable = require("./MASTERS/options-applicable.model")(
  sequelize,
  Sequelize
);
db.amenitiesMaster = require("./MASTERS/amenities-masters.model")(
  sequelize,
  Sequelize
);
db.serviceMaster = require("./MASTERS/service-masters.model")(
  sequelize,
  Sequelize
);
db.termsAndCondition = require("./MASTERS/terms-and-condition.model")(
  sequelize,
  Sequelize
);
db.adminTermsAndCondition =
  require("./MASTERS/admin-terms-and-condition.model")(sequelize, Sequelize);
db.privacyPolicy = require("./MASTERS/privacy-policy-masters.model")(
  sequelize,
  Sequelize
);
db.aboutUs = require("./MASTERS/about-us-masters.model")(sequelize, Sequelize);

db.petService = require("./MAIN/pet-service.model")(sequelize, Sequelize);
db.petSpace = require("./MAIN/pet-space.model")(sequelize, Sequelize);
//main
db.booking = require("./MAIN/booking.model")(sequelize, Sequelize);
db.selfDescription = require("./MAIN/self-description.model")(
  sequelize,
  Sequelize
);
db.registration = require("./MAIN/registration.model")(sequelize, Sequelize);
db.adminLogin = require("./MAIN/admin-login-masters.model")(sequelize, Sequelize);

module.exports = db;
