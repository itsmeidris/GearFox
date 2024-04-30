import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";

function TestProduct() {
  const Products = ["Product", "Description", "Price", "Delete"];
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const getProductData = async () => {
    try {
      const res = await axios.get("http://localhost:5454/products");
      if (res.status === 200) { // Corrected status check from 201 to 200
        setProducts(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5454/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleEditChange = (e) => {
    setEditingProduct({
      ...editingProduct,
      [e.target.name]: e.target.value,
    });
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:5454/products/${editingProduct._id}`,
        editingProduct
      );
      console.log("Product updated successfully");
      setEditingProduct(null); // Reset editingProduct after successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <h1 className="flex justify-center my-4"> Product M </h1>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          {/* Table headers */}
        </table>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              {/* Table cells */}
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Card>

      {/* Update form */}
      {editingProduct && (
        <div>
          <h1 className="flex justify-center my-12">Update Product</h1>
          <form onSubmit={updateProduct}>
            <input
              name="name"
              placeholder="Name"
              value={editingProduct.name}
              onChange={handleEditChange}
            />
            <input
              name="description"
              placeholder="Description"
              value={editingProduct.description}
              onChange={handleEditChange}
            />
            <input
              name="price"
              placeholder="Price"
              value={editingProduct.price}
              onChange={handleEditChange}
            />
            <button type="submit">Update Product</button>
            <button onClick={() => setEditingProduct(null)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
}

export default TestProduct;
