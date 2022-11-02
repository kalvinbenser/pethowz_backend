const yup = require("yup");
const createBookingSchema = yup.object({
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
    type: yup.number().required(),
   
  }),
});

const createPetServiceBooking = yup.object({
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
   
  }),
});


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
  
  }),
});



module.exports = { createBookingSchema,createPetServiceBooking,createPetSpaceBooking};
