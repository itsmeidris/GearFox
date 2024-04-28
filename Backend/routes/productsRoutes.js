const express = require("express");
const router = express.Router();
const {
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  patchProduct,
} = require("../controllers/productsControllers");

router.route("/products").get(getAllProducts).post(createProduct);

router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .patch(patchProduct)
  .delete(deleteProduct);

module.exports = router;
