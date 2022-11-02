const yup = require("yup");
const createAboutUsSchema = yup.object({
  body: yup.object({
    content: yup.string().required(),
  }),
});

const updateAboutUsSchema = yup.object({
  body: yup.object({
    content_id:yup.number().required(),
    content: yup.string().notRequired(),
  }),
});

module.exports = { createAboutUsSchema, updateAboutUsSchema};