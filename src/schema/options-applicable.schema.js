const yup = require("yup");
const createOptionsApplicableSchema = yup.object({
  body: yup.object({
    options: yup.string().required(),
    isActive: yup.bool().required()
 }),
});

const updateOptionsApplicableSchema = yup.object({
  body: yup.object({
    options: yup.string().notRequired(),
    isActive: yup.bool().notRequired()
  }),
});

module.exports = { createOptionsApplicableSchema, updateOptionsApplicableSchema};