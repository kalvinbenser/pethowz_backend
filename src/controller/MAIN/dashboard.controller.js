const db = require("../../model");

const Booking = db.booking;
const PetServiceBook = db.petServiceBook;
const PetSpaceBook = db.petSpaceBook;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

exports.getTotalVenueBookedDashboardListHandler = (req, res) => {
  PetSpaceBook.count()
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

exports.getTotalServicesBookingDashboardListHandler = (req, res) => {
  PetServiceBook.count()
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

exports.getTotalBookingsDashboardHandler = async (req, res) => {
  const space = await getPetSpaceBookCount();

  const service = await getPetServiceBookCount();

  const data = space + service;
  RESPONSE.Success.Message = MESSAGE.SUCCESS;
  RESPONSE.Success.data = data;
  res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
};

const getPetSpaceBookCount = (req, res) => {
  return new Promise((resolve) => {
    PetSpaceBook.count()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        resolve(0);
      });
  });
};

const getPetServiceBookCount = (req, res) => {
  return new Promise((resolve) => {
    PetServiceBook.count()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        resolve(0);
      });
  });
};
