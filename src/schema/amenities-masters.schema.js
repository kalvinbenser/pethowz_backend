const yup = require("yup");
const createAmenitySchema = yup.object({
  body: yup.object({
    amenity: yup.string().required(),
    isActive: yup.bool().required()
 }),
});

const updateAmenitySchema = yup.object({
  body: yup.object({
    amenity_id:yup.number().required(),
    amenity: yup.string().notRequired(),
    isActive: yup.bool().notRequired()
  }),
});

module.exports = { createAmenitySchema, updateAmenitySchema};