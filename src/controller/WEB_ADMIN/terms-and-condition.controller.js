const db = require("../../model");
const TermsAndCondition = db.termsAndCondition;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const terms_condition = {
    content: req.body.content,
  };

  TermsAndCondition.create(terms_condition)
    .then(async (data) => {
      const inA = await inActiveOldTerms(data.id);
      console.log("inA", inA);
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = { id: data.id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

const inActiveOldTerms = async (id) => {
  console.log("id", id);
  return new Promise((resolve) => {
    TermsAndCondition.update(
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

exports.findAll = (req, res) => {
  TermsAndCondition.findOne({ where: { isActive: true } })
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
  const terms_condition = {
    content: req.body.content,
  };

  TermsAndCondition.update(terms_condition, {
    where: { id: id },
  })
    .then((num) => {
      console.log("num", num);
      if (num == 1) {
        RESPONSE.Success.Message =
          "Terms and Condition was updated successfully.";
        RESPONSE.Success.data = { id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update Terms and Condition with id=${id}. Maybe Terms and Condition was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
