module.exports = (sequelize, Sequelize) => {
  const aboutUs = sequelize.define("about_us", {
    content: {
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

  return aboutUs;
};
