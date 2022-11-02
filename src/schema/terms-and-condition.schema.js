const yup = require("yup");
const createTermsAndConditionSchema = yup.object({
  body: yup.object({
    content: yup.string().required(),
  }),
});

const updateTermsAndConditionSchema = yup.object({
  body: yup.object({
    content_id:yup.number().required(),
    content: yup.string().notRequired(),
  }),
});

module.exports = { createTermsAndConditionSchema, updateTermsAndConditionSchema};