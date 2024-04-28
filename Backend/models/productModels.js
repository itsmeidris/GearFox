const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
  
});
const Product = mongoose.model("Product", productSchema, "Products");

//Validate Create Product
function validateCreateProduct(obj) {
  const schema = Joi.object({
    image: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().min(7).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(obj);
}

//Validate Update Product
function validateUpdateProduct(obj) {
  const schema = Joi.object({
    image: Joi.string(),
    name: Joi.string(),
    description: Joi.string().min(7),
    price: Joi.number(),
  });
  return schema.validate(obj);
}

module.exports = { Product, validateCreateProduct, validateUpdateProduct };
