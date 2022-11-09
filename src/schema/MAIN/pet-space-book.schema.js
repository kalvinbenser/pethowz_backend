const yup = require("yup");

const createPetSpaceBooking = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    name: yup.string().required(),
    contact_number: yup.string().required(),
    pet_name: yup.string().required(),
    pet_count: yup.number().required(),
    days: yup.number().required(),
    service_type: yup.string().required(),
    venue_name: yup.string().required(),
    cost_per_hour: yup.number().required(),
    pet_space_id: yup.number().required(),
  }),
});

const getPetSpaceBooking = yup.object({
    body: yup.object({
      user_id: yup.string().required(),
     
    }),
  });
  
  


module.exports = { createPetSpaceBooking,getPetSpaceBooking};
