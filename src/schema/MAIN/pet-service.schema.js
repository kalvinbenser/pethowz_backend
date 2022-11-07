const yup = require("yup");
const createPetServiceSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    venue_name: yup.string().required(),
    location: yup.string().required(),
    image: yup.array().required(),
    service_details: yup.string().notRequired(),
    service: yup.array().required(),
  }),
});

const updatePetServiceSchema = yup.object({
  body: yup.object({
    pet_services_id: yup.number().required(),
    service_details: yup.string().notRequired(),
    user_id: yup.string().notRequired(),
    venue_name: yup.string().notRequired(),
    location: yup.string().notRequired(),
    image: yup.array().notRequired(),
  }),
});

module.exports = { createPetServiceSchema, updatePetServiceSchema };
