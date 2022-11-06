const yup = require("yup");
const createSelfDescriptionSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    PetCategory:yup.array().required(),
    content1: yup.string().required(),
    content2: yup.string().required(),
    content3: yup.string().required(),
    content4: yup.string().required(),
    content5:yup.string().required(),
    content6:yup.string().required(),
  }),
});

const updateSelfDescriptionSchema = yup.object({
    body: yup.object({
        user_id: yup.string().required(),
        PetCategory:yup.array().required(),
        content1: yup.string().notRequired(),
        content2: yup.string().notRequired(),
        content3: yup.string().notRequired(),
        content4: yup.string().notRequired(),
        content5:yup.string().notRequired(),
        content6:yup.string().notRequired(),
      }),

  
});

module.exports = { createSelfDescriptionSchema, updateSelfDescriptionSchema};
