
const yup = require("yup");
const createPetServiceSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    venue_name: yup.string().required(),
    service_details: yup.string().required(),
    service: yup.array().required(),
    location:yup.string().required(),
    image: yup.array().required(),

 }),
});

const updatePetServiceSchema = yup.object({
  body: yup.object({
    pet_services_id: yup.number().required(),
    user_id: yup.string().notRequired(),
    venue_name: yup.string().notRequired(),
    service_details: yup.string().notRequired(),
    service: yup.array().notRequired(),
    location:yup.string().notRequired(),
    image: yup.array().notRequired(),
    status:yup.number().notRequired(),
    delStatus: yup.bool().notRequired(),
  }),
});

module.exports = { createPetServiceSchema, updatePetServiceSchema};