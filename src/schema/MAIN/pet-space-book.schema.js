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
    service: yup.array().required(),
    venue_name: yup.string().required(),
    cost_per_hour: yup.number().required(),
    pet_space_id: yup.number().required(),
    pet_space_user_id: yup.number().required(),
   
  }),
});

const updatePetSpaceBooking = yup.object({
    body: yup.object({
      user_id: yup.string().notRequired(),
      name: yup.string().notRequired(),
      contact_number: yup.string().notRequired(),
      pet_name: yup.string().notRequired(),
      pet_count: yup.number().notRequired(),
      days: yup.number().notRequired(),
      service_type: yup.string().notRequired(),
      service: yup.array().notRequired(),
      venue_name: yup.string().notRequired(),
      cost_per_hour: yup.number().notRequired(),
      pet_space_id: yup.number().notRequired(),
      pet_space_user_id: yup.number().notRequired(),
     
    }),
  });
  
  


module.exports = { createPetSpaceBooking,updatePetSpaceBooking};
