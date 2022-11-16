const db = require("../../model");
const PetService = db.petService;
const ServiceSlot = db.serviceSlot;
const sequelize = db.sequelize;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const pet_service = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    service_details: req.body.service_details,
    location: req.body.location,
    image: req.body.image,
    pet_space_id: 0,
  };

  let pet_service_data = [];

  await PetService.create(pet_service)
    .then((data) => {
      pet_service_data = data.id;
    })
    .catch((err) => {
      pet_service_data = err.message;
    });

  for (i in req.body.service) {
    req.body.service[i].pet_service_id = pet_service_data;
    req.body.service[i].type = 2;
  }

  await ServiceSlot.bulkCreate(req.body.service)
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

exports.findAll = (req, res) => {
  PetService.findAll()
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

exports.getAllPetServiceList = (req, res) => {
  PetService.findAll({ where: { status: 1 } })
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

exports.getPetServicePendingList = (req, res) => {
  const status = req.body.status;
  PetService.findAll({ where: { status: status } })
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

exports.getPetServicePendingListById = (req, res) => {
  id = req.params.pet_services_id;
  PetService.findOne({ where: { id: id } })
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = [data];
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getPetServiceMobileListById = (req, res) => {
  id = req.params.user_id;
  PetService.findAll({ where: { user_id: id } })
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

exports.getSlotByPetServiceId = (req, res) => {
  id = req.params.id;
  sequelize
    .query(
      `select ss.id as slot_id,ss.service_master_id,sm.service_name,sm.image,ss.cost from service_slot ss left join service_master as sm on sm.id=ss.service_master_id  where pet_service_id=${id}`
    )
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = data[0];
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getSlotByPetSpaceId = async (req, res) => {
  id = req.params.id;
  const service_id = await getSlotpetServiceById(id);
  //console.log("service_id",service_id)
  if (service_id != 0) {
    sequelize
      .query(
        `select ss.id as slot_id,ss.service_master_id,sm.service_name,sm.image,ss.cost from service_slot ss left join service_master as sm on sm.id=ss.service_master_id  where ss.pet_service_id=${service_id}`
      )
      .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        console.log("data", data);
        RESPONSE.Success.data = data[0];
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      })
      .catch((err) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = [];
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      });
  } else {
    RESPONSE.Success.Message = MESSAGE.SUCCESS;
    RESPONSE.Success.data = [];
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  }
};

const getSlotpetServiceById = async (id) => {
  return new Promise(async (resolve) => {
    await PetService.findOne({ where: { id: id } })
      .then((data) => {
        if (data) {
          resolve(data.id);
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
  const pet_services_id = req.params.pet_services_id;
  PetService.findOne({ where: { id: pet_services_id } })
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

exports.update = (req, res) => {
  const id = req.body.pet_services_id;
  const pet_service = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    service_details: req.body.service_details,
    service: req.body.service,
    location: req.body.location,
    image: req.body.image,
  };
  PetService.update(pet_service, {
    where: { id: id },
  })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "Pet Service was updated successfully.";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update Pet Service with id=${id}. Maybe Pet Service was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.updateAdminApprovedPetServiceMaster = (req, res) => {
  const approval = {
    status: 1,
  };
  const id = req.body.service_id;
  PetService.update(approval, {
    where: { id: id },
  })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "Pet Service was updated successfully.";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update Pet Service with id=${id}. Maybe Pet Service was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.serviceApproval = (req, res) => {
  const type = req.body.type;
  const service_id = req.body.service_id;
  console.log("type", type);
  let status = 0;
  if (type == "reject") {
    status = 2;
  } else if (type == "approval") {
    status = 1;
  } else {
    status = 0;
  }
  sequelize
    .query(`update pet_service set status=${status} where id=${service_id}`)
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = [];
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = `Cannot find PetSpace with service_id=${service_id}.`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  PetService.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = "Pet Service was deleted successfully";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot delete Pet Service with id=${id}. Maybe Pet Service was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
