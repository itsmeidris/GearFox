const {
  validateCreateProduct,
  validateUpdateProduct,
  Product,
} = require("../models/productModels");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json("Cannot get Data.");
  }
};

// Get product by id
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).lean();
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Create product
const createProduct = async (req, res) => {
  const { error } = validateCreateProduct(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const product = new Product({
    image: req.body.image,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  const result = await product.save();
  res.status(201).json(result);
};

// Update a product

// const updateProduct = async (req, res) => {
//   const { error } = validateUpdateProduct(req.body);

//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }

//   const updateProduct = await Product.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: {
//         image: req.body.image,
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//       }
//     },
//     { new: true }
//   );
//   res.status(200).json(updateProduct);
// };

const updateProduct = async (req, res) => {
  try {
    const { error } = validateUpdateProduct(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          image: req.body.image,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
        },
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Patch
const patchProduct = async (req, res) => {
  const { error } = validateUpdateProduct(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const patchProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      },
    },
    { new: true }
  );
  res.status(200).json(patchProduct);
};

// Delete a product

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } else {
    res.status(400).json({ message: "Product not found" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  patchProduct,
};
