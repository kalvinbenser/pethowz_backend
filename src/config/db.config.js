module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Pethowz@123",
  DB: "pethowz_backend",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
