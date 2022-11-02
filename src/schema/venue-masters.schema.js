const yup = require("yup");
const createVenueSchema = yup.object({
  body: yup.object({
    venue: yup.string().required(),
    isActive: yup.bool().required()
 }),
});

const updateVenueSchema = yup.object({
  body: yup.object({
    venue_id:yup.number().required(),
    venue: yup.string().notRequired(),
    isActive: yup.bool().notRequired()
  }),
});

module.exports = { createVenueSchema, updateVenueSchema};