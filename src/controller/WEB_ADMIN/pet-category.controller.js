const db = require("../../model");
const Category = db.PetCategory;

const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
// const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const pet_Category = {
    category: req.body.category,
    isActive: req.body.isActive,
    image: req.body.image,
  };

  Category.create(pet_Category)
  .then((data) => {
    RESPONSE.Success.Message=MESSAGE.SUCCESS;
    RESPONSE.Success.data={ id: data.id }
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  })
  .catch((err) => {
    RESPONSE.Failure.Error=err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};

exports.findAll = (req, res) => {
  Category.findAll()
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
  const id = req.body.pet_cat_id;
  const pet_Category = {
    category: req.body.category,
    isActive: req.body.isActive,
    image: req.body.image,
  };

  Category.update(pet_Category, {
    where: { id: id },
  })
  .then((num) => {
    if (num == 1) {
      RESPONSE.Success.Message = "Pet Category was updated successfully.";
      RESPONSE.Success.data = { id: id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } else {
      RESPONSE.Failure.Message = `Cannot update Pet Category with id=${id}. Maybe Pet Category was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};

exports.delete = (req, res) => {
  const id = req.body.pet_cat_id;

  Category.destroy({
    where: { id: id },
  })
  .then((num) => {
    if (num == 1) {
      RESPONSE.Success.Message="Pet Category was deleted successfully";
      RESPONSE.Success.data= { id:id};
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
    } else {
      RESPONSE.Failure.Message=`Cannot delete Pet Category with id=${id}. Maybe Pet Category was not found or req.body is empty!`;
      res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
    }
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
};


exports.getAllPetCategoryList = (req, res) => {
  Category.findAll({where:{isActive:true}})
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