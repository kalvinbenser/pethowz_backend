const db = require("../../model");

const petSpace = db.petSpace;
const petService = db.petService;
const Op = db.Sequelize.Op;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

exports.getSearchHandler = async (req, res) => {
  const searchData = req.body.search;
  const pet_space = await petSpace.findAll({
    where: {
      venue_name: {
        [Op.like]: `%${searchData}%`,
      },
      delStatus: false,
    },
  });

  const pet_service = await petService.findAll({
    where: {
      venue_name: {
        [Op.like]: `%${searchData}%`,
      },
      delStatus: false,
    },
  });

  return res.status(StatusCode.ACCEPTED.code).send({
    Status: true,
    Success: true,
    Message: "SUCCESS",
    petSpace: pet_space,
    petService: pet_service,
  });
};
