const db = require("../../model");

const AboutUs = db.aboutUs;
const ServiceMaster = db.serviceMaster;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const about_us = {
    content: req.body.content,
  };

  AboutUs.create(about_us)
    .then(async (data) => {
      await inActiveOldAboutUs(data.id);
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = { id: data.id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

const inActiveOldAboutUs = async (id) => {
  console.log("id", id);
  return new Promise((resolve) => {
    AboutUs.update(
      { isActive: false },
      {
        where: {
          id: {
            [Op.ne]: id,
          },
        },
      }
    )
      .then((num) => {
        console.log("num", num);
        if (num == 1) {
          resolve(1);
        } else {
          resolve(0);
        }
      })
      .catch((err) => {
        resolve(0);
      });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  AboutUs.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find AboutUs with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getServiceMasterById = (req, res) => {
  const id = req.params.id;

  ServiceMaster.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find PetService with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.findAll = (req, res) => {
  AboutUs.findOne({ where: { isActive: true } })
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

exports.update = async (req, res) => {
  const id = req.body.content_id;

  const about_us = {
    content: req.body.content,
  };

  AboutUs.update(about_us, {
    where: { id: id },
  })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "AboutUs was updated successfully.";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update AboutUs with id=${id}. Maybe AboutUs was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
