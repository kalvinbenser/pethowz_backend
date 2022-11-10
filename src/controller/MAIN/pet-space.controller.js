const db = require("../../model");
const PetSpace = db.petSpace;
const PetService = db.petService;
const ServiceSlot = db.serviceSlot;
const RESPONSE = require("../../constants/response");
const { MESSAGE } = require("../../constants/messages");
const { StatusCode } = require("../../constants/HttpStatusCode");
// const Op = db.Sequelize.Op;

exports.create = async(req, res) => {
 
  const pet_space = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    venue_category:req.body.venue_category,
    cost_per_hour:req.body.cost_per_hour,
    amenities:req.body.amenities,
    location: req.body.location,
    image: req.body.image,
   };
   const service_p=req.body.service


  if(service_p.length>0){
let pet_Space_data=[]

 await PetSpace.create(pet_space)
  .then((data) => {
    pet_Space_data=data.id
  })
  .catch((err) => {
    pet_Space_data=err.message
  
  });

  const pet_service = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    service_details:" ",
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


  for(i in  req.body.service){
    req.body.service[i].pet_service_id=  pet_service_data;
    req.body.service[i].type=1
  }
 
  await ServiceSlot.bulkCreate(req.body.service)
  .then((data) => {
    RESPONSE.Success.Message = MESSAGE.SUCCESS;
    RESPONSE.Success.data = data ;
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  });
  } 
  else{
    await PetSpace.create(pet_space)
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = data ;
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    
    });
  }
 
};


exports.getAllPetSpaceList = (req, res) => {
 

  PetSpace.findAll({where:{status:1}})
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
 

    PetSpace.findAll({where:{status:0}})
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
  let updateBody;
  const approvalType = req.body.type;
  const id = req.body.space_id;
  
  if (approvalType === "approval") {
    updateBody = { status: 1 };
  }
  if (approvalType === "reject") {
    updateBody = { status: 2 };
  }
  PetSpace.update(updateBody, {
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

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    PetSpace.findByPk(id)
      .then((data) => {
        if (data) {
          RESPONSE.Success.Message = MESSAGE.SUCCESS;
          RESPONSE.Success.data = data;
          res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
        } else {
          RESPONSE.Failure.Message = `Cannot find PetSpace with id=${id}.`;
          res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
      })
      .catch((err) => {
        RESPONSE.Failure.Message = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
      });
  };
  
  
exports.update = (req, res) => {
  const id = req.body.pet_space_id;
  const pet_space = {
    user_id: req.body.user_id,
    venue_name: req.body.venue_name,
    venue_category:req.body.venue_category,
    cost_per_hour:req.body.cost_per_hour,
    amenities:req.body.amenities,
    location: req.body.location,
    image: req.body.image,
    service:req.body.service,
  };

 
  PetSpace.update(pet_space, {
    where: { id: id }
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
      where: { id : id }
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message="PetSpace was deleted successfully";
        RESPONSE.Success.data= { id:id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
      } else {
        RESPONSE.Failure.Message=`Cannot delete PetSpace with id=${id}. Maybe PetSpace was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };