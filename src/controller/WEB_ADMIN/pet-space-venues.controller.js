const db = require("../../model");
const PetSpaceVenue = db.petSpace;// import from pet-space.service
// const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const pet_space_venue = {
        pending:req.body.pending,
        approved:req.body.approved,
        rejected:req.body.rejected,
      };
 
      PetSpaceVenue.findAll(pet_space_venue)
    .then(data => {
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pet Space."
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.user_id;

  PetSpaceVenue.update(req.body, {
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet Space is updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pet Space  with id=${id}. Maybe Pet Space  was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pet Space  with id=" + id
      });
    });
};