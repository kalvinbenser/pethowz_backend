const db = require("../../model");

const ServiceSlot = db.serviceSlot;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

// const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const slot = {
    service_master_id: req.body.service_master_id,
    pet_service_id:req.body.pet_service_id,
    cost: req.body.cost,
    type: req.body.type,
 
  };

  ServiceSlot.create(slot)
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
  ServiceSlot.findAll()
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
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ServiceSlot.findByPk(id)
      .then((data) => {
        if (data) {
          RESPONSE.Success.Message = MESSAGE.SUCCESS;
          RESPONSE.Success.data = data;
          res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
        } else {
          RESPONSE.Failure.Message = `Cannot find ServiceSlot with id=${id}.`;
          res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
      })
      .catch((err) => {
        RESPONSE.Failure.Message = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
      });
  };
  
  
exports.update = async (req, res) => {
  const id = req.params.id;

  ServiceSlot
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "ServiceSlot was updated successfully.";
        RESPONSE.Success.data = { user_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update ServiceSlot with user_id=${id}. Maybe ServiceSlot was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
