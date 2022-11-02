const db = require("../../model");

const Booking = db.booking;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");

exports.getTotalVenueBookedDashboardListHandler = (req, res) => {
    Booking.count({where:{type:1}})
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
    Booking.count({where:{type:2}})
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

  exports.getTotalBookingsDashboardHandler = (req, res) => {
    Booking.count()
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

