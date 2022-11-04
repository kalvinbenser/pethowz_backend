const yup = require("yup");
const createSelfDescriptionSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    PetCategory: yup.array().required(),
    content1: yup
      .string()
      .required("Introduce yourself and why enjoy being with pets. required"),
    content2: yup
      .string()
      .required(
        "Tell us about the type of pet you have and your experience with it. required"
      ),
    content3: yup
      .string()
      .required("How does your service stand out?. required"),
    content4: yup
      .string()
      .required("What do you enjoy about the work you do?. required"),
    content5: yup.string().required("Your skils and qualifications. required"),
    content6: yup
      .string()
      .required("Other special skills with per or qualification ?. required"),
  }),
});

const updateSelfDescriptionSchema = yup.object({
  body: yup.object({
    user_id: yup.string().required(),
    PetCategory: yup.array().required(),
    content1: yup.string().notRequired(),
    content2: yup.string().notRequired(),
    content3: yup.string().notRequired(),
    content4: yup.string().notRequired(),
    content5: yup.string().notRequired(),
    content6: yup.string().notRequired(),
  }),
});

module.exports = { createSelfDescriptionSchema, updateSelfDescriptionSchema };
