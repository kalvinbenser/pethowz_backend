const db = require("../../model");

const selfDescription = db.selfDescription;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

// const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const self = {
    user_id: req.body.user_id,
    PetCategory:req.body.PetCategory,
    content1: req.body.content1,
    content2: req.body.content2,
    content3: req.body.content3,
    content4: req.body.content4,
    content5: req.body.content5,
    content6: req.body.content6,
  };

  selfDescription
    .create(self)
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = { id: data.id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.findAll = (req, res) => {
  selfDescription
    .findAll()
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = data;
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.findByUserId = (req, res) => {
  const id = req.params.user_id;

  selfDescription
    .findOne({ where: { user_id: id } })
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find selfDescription with user_id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
exports.update = async (req, res) => {
  const id = req.body.user_id;
  updateData = {
    PetCategory:req.body.PetCategory,
    content1: req.body.content1,
    content2: req.body.content2,
    content3: req.body.content3,
    content4: req.body.content4,
    content5: req.body.content5,
    content6: req.body.content6,
  };

  selfDescription
    .update(updateData, {
      where: { user_id: id },
    })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "selfDescription was updated successfully.";
        RESPONSE.Success.data = { user_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update selfDescription with user_id=${id}. Maybe selfDescription was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
