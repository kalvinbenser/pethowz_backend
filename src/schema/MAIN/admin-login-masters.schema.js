const yup = require("yup");
const createAdminLoginSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required()
 }),
});


module.exports = { createAdminLoginSchema };