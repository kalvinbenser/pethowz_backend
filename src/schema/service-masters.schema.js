const yup = require("yup");
const createServiceMastersSchema = yup.object({
  body: yup.object({
    service_name: yup.string().required(),
    isActive: yup.bool().required(),
    image: yup.string().required()

 }),
});

const updateServiceMastersSchema = yup.object({
  body: yup.object({
    service_id:yup.number().required(),
    service_name: yup.string().notRequired(),
    isActive: yup.bool().notRequired(),
    image: yup.string().notRequired()
  }),
});

module.exports = { createServiceMastersSchema, updateServiceMastersSchema};