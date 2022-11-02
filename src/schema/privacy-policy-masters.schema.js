const yup = require("yup");
const createPrivacyPolicySchema = yup.object({
  body: yup.object({
    content: yup.string().required(),
  }),
});

const updatePrivacyPolicySchema = yup.object({
  body: yup.object({
    content_id:yup.number().required(),
    content: yup.string().notRequired(),
  }),
});

module.exports = { createPrivacyPolicySchema, updatePrivacyPolicySchema};