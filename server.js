const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const db = require("./src/model");

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Pethowz server is running" });
});

// //router
app.use("/", require("./src/routes/routes.js"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const HOST="0.0.0.0"
app.listen(PORT,HOST, () => {
  console.log(`Server is running on port ${PORT}.`);
});
