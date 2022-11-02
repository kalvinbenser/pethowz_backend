const db = require("../../model");
const PetVenueBooking = db.petVenueBooking;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
// const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
 
  const pet_venue = {
    name: req.body.name,
    contact_number: req.body.contact_number,
    pet_name:req.body.pet_name,
    pet_count:req.body.pet_count,
    days:req.body.days,
    service:req.body.service,
    venue_name:req.body.venue_name,
    cost_per_hour:req.body.cost_per_hour,
    requirement:req.body.requirement
  };

 
  PetVenueBooking.create(pet_venue)
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


exports.findAll =  (req, res) => {
 

  PetVenueBooking.findAll()
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

  PetVenueBooking.findByPk(id)
  .then((data) => {
    if (data) {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = data;
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } else {
      RESPONSE.Failure.Message = `Cannot find Pet Venue Booking with id=${id}.`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};


exports.update = async  (req, res) => {
  const id = req.params.id;

  PetVenueBooking.update(req.body, {
    where: { id: id }
  })
  .then((num) => {
    console.log("num", num);
    if (num == 1) {
      RESPONSE.Success.Message = "Pet Venue booking was updated successfully.";
      RESPONSE.Success.data = { id: id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } else {
      RESPONSE.Failure.Message = `Cannot update Pet Venue booking with id=${id}. Maybe Pet Venue booking was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};

exports.delete =  (req, res) => {
  const id = req.params.id;

  PetVenueBooking.destroy({
    where: { id: id }
  })
  .then((num) => {
    if (num == 1) {
      RESPONSE.Success.Message="Pet Venue booking was deleted successfully";
      RESPONSE.Success.data= { id:id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
    } else {
      RESPONSE.Failure.Message=`Cannot delete Pet Venue booking with id=${id}. Maybe Pet Venue booking was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};
