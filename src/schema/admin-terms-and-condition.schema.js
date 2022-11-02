const yup = require("yup");
const createAdminTermsAndConditionSchema = yup.object({
  body: yup.object({
    content: yup.string().required(),
  }),
});

const updateAdminTermsAndConditionSchema = yup.object({
  body: yup.object({
    content_id:yup.number().required(),
    content: yup.string().notRequired(),
  }),
});

module.exports = { createAdminTermsAndConditionSchema, updateAdminTermsAndConditionSchema};