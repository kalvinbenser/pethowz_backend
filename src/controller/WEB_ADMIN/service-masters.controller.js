const db = require("../../model");
const ServiceMaster = db.serviceMaster;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
// const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
 
  const service_master = {
    service_name: req.body.service_name,
    isActive: req.body.isActive,
    image: req.body.image 
  };

 
  ServiceMaster.create(service_master)
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
 

    ServiceMaster.findAll()
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
  const id = req.body.service_id;
  const service_master = {
    service_name: req.body.service_name,
    isActive: req.body.isActive,
    image: req.body.image 
  };

  ServiceMaster.update(service_master, {
    where: { id: id }
  })
  .then((num) => {
    console.log("num", num);
    if (num == 1) {
      RESPONSE.Success.Message = "Service was updated successfully.";
      RESPONSE.Success.data = { id: id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } else {
      RESPONSE.Failure.Message = `Cannot update Service with id=${id}. Maybe Service was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};


exports.delete = (req, res) => {
  const id = req.body.service_id;

  ServiceMaster.destroy({
    where: { id: id }
  })
  .then((num) => {
    if (num == 1) {
      RESPONSE.Success.Message="Service was deleted successfully";
      RESPONSE.Success.data= { id:id};
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
    } else {
      RESPONSE.Failure.Message=`Cannot delete  Service with id=${id}. Maybe Service was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};


exports.getAllServiceList = (req, res) => {
 

  ServiceMaster.findAll({where:{isActive:true}})
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