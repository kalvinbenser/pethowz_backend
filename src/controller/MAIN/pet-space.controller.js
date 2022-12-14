const db = require("../../model");
const PetSpace = db.petSpace;
const PetService = db.petService;
const Self = db.selfDescription;
const Register = db.registration;
const ServiceSlot = db.serviceSlot;
const sequelize = db.sequelize;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { object } = require("yup");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const pet_space = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    venue_category: req.body.venue_category,
    cost_per_hour: req.body.cost_per_hour,
    amenities: req.body.amenities,
    location: req.body.location,
    image: req.body.image,
  };
  const service_p = req.body.service;

  if (service_p.length > 0) {
    let pet_Space_data = [];

    await PetSpace.create(pet_space)
      .then((data) => {
        pet_Space_data = data.id;
      })
      .catch((err) => {
        pet_Space_data = err.message;
      });

    const pet_service = {
      user_id: req.body.user_id,
      venue_name: req.body.venue_name,
      service_details: " ",
      location: req.body.location,
      image: req.body.image,
      pet_space_id: pet_Space_data,
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
      req.body.service[i].type = 1;
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
  } else {
    await PetSpace.create(pet_space)
      .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      })
      .catch((err) => {
        RESPONSE.Failure.Message = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
      });
  }
};

exports.getAllPetSpaceList = (req, res) => {
  PetSpace.findAll({ where: { status: 1 } })
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
  PetSpace.findAll()
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

exports.getPetSpacePendingList = (req, res) => {
  const status = req.body.status;
  PetSpace.findAll({ where: { status: status } })
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

exports.getPetSpaceMobileListById = (req, res) => {
  id = req.params.user_id;
  PetSpace.findAll({ where: { user_id: id } })
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
// Independent House","Apartment
exports.getIndependentHouseApartment = (req, res) => {
  const text1 = "Independent";
  const text2= "Apartment";
  PetSpace.findAll({
    where: {
      venue_category: {
        [Op.like]: `%${text1}%`,
        [Op.like]: `%${text2}%`,
      },
      isActive:true,
      delStatus:false
    },
  })
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

exports.updateAdminApprovedPetSpaceMaster = (req, res) => {
  const approval = {
    status: 1,
  };
  const id = req.body.space_id;
  PetSpace.update(approval, {
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

exports.venueApproval = (req, res) => {
  const type = req.body.type;
  const space_id = req.body.space_id;
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
    .query(`update pet_space set status=${status} where id=${space_id}`)
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = [];
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = `Cannot find PetSpace with space_id=${space_id}.`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    });
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  const data = await PetSpace.findOne({ where: { id: id }, raw: true });
  const petService = await PetService.findOne({ where: { pet_space_id: id } });

  if (petService?.id) {
    const slot = await sequelize.query(
      `select ss.id,sm.service_name,ss.cost from service_slot ss left join service_master sm on sm.id=ss.service_master_id where ss.pet_service_id=${petService.id};`
    );
    data.Slot = slot[0];
  } else {
    data.Slot = [];
  }

  if (data) {
    const regData = await Register.findOne({
      where: { user_id: data.user_id },
    });
    const selfData = await Self.findOne({ where: { user_id: data.user_id } });

    data.RegistrationDetails = regData;
    data.SelfDescriptionDetails = selfData;

    data.venue_category = JSON.parse(data.venue_category);
    data.amenities = JSON.parse(data.amenities);
    data.image = JSON.parse(data.image);
    RESPONSE.Success.Message = MESSAGE.SUCCESS;
    RESPONSE.Success.data = [data];
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } else {
    RESPONSE.Success.Message = MESSAGE.SUCCESS;
    RESPONSE.Success.data = [];
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  }
};

exports.update = (req, res) => {
  const id = req.body.pet_space_id;
  const pet_space = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    venue_category: req.body.venue_category,
    cost_per_hour: req.body.cost_per_hour,
    amenities: req.body.amenities,
    location: req.body.location,
    image: req.body.image,
    service: req.body.service,
  };

  PetSpace.update(pet_space, {
    where: { id: id },
  })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message = "PetSpace was updated successfully.";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update PetSpace with id=${id}. Maybe PetSpace was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  PetSpace.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = "PetSpace was deleted successfully";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot delete PetSpace with id=${id}. Maybe PetSpace was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
