const yup = require("yup");
createServiceSlotSchema = yup.object({
  body: yup.object({
    service_master_id: yup.number().required(),
    pet_service_id:yup.number().required(),
    cost: yup.string().required(),
    type: yup.number().required(),
  }),
});

updateServiceSlotSchema = yup.object({
  body: yup.object({
    service_master_id: yup.number().notRequired(),
    pet_service_id:yup.number().notRequired(),
    cost: yup.string().notRequired(),
    type: yup.number().notRequired(),
  }),
  params: yup.object({
    id: yup.number().required(),
  }),
});

module.exports = { createServiceSlotSchema, updateServiceSlotSchema };
