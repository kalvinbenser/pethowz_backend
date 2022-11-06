const yup = require("yup");
const createPetSpaceSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    venue_name: yup.string().required(),
    venue_category: yup.array().required(),
    cost_per_hour: yup.number().required(),
    amenities: yup.array().required(),
    location: yup.string().required(),
    cost_per_hour: yup.number().required(),
    image: yup.array().required(),
  }),
});

const updatePetSpaceSchema = yup.object({
  body: yup.object({
    pet_space_id: yup.number().required(),
    user_id: yup.string().notRequired(),
    venue_name: yup.string().notRequired(),
    venue_category: yup.array().notRequired(),
    cost_per_hour: yup.number().notRequired(),
    amenities: yup.array().notRequired(),
    location: yup.string().notRequired(),
    cost_per_hour: yup.number().notRequired(),
    image: yup.array().notRequired(),
    status: yup.number().notRequired(),
  }),
});

module.exports = { createPetSpaceSchema, updatePetSpaceSchema };
