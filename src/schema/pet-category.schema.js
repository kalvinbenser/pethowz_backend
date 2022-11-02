const yup = require("yup");
const createPetCategorySchema = yup.object({
  body: yup.object({
    category: yup.string().required(),
    isActive: yup.bool().required(),
    image: yup.string().required(),
  }),
});

const updatePetCategorySchema = yup.object({
  body: yup.object({
    pet_cat_id:yup.number().required(),
    category: yup.string().notRequired(),
    isActive: yup.bool().notRequired(),
    image: yup.string().notRequired(),
  }),
});

module.exports = { createPetCategorySchema, updatePetCategorySchema};
