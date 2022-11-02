const yup = require("yup");
const createRegistrationSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    name: yup.string().required(),
    contact_number: yup.string().required(),
    img: yup.string().required(),
    gender: yup.number().required(),
    email:yup.string().required(),
    address:yup.string().required(),
  }),
});

const updateRegistrationSchema = yup.object({
    body: yup.object({
        user_id: yup.string().required(),
        name: yup.string().notRequired(),
        contact_number: yup.string().notRequired(),
        img: yup.string().notRequired(),
        gender: yup.number().notRequired(),
        email:yup.string().notRequired(),
        address:yup.string().notRequired(),
      }),

     
});

module.exports = { createRegistrationSchema, updateRegistrationSchema};
