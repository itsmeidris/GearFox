import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";

function TestProduct() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const res = await axios.get("http://localhost:5454/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5454/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5454/products", formData);
      console.log("Product added successfully");
      setFormData({ name: "", description: "", image: "", price: 0 });
      getProductData();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      image: product.image,
      name: product.name,
      description: product.description,
      price: product.price,
    });
    setIsEditing(true);
    setEditingProduct(product);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5454/products/${editingProduct._id}`,
        editingProduct
      );
      console.log("Product updated successfully");
      setIsEditing(false);
      getProductData();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5454/products?search=${searchTerm}`);
      setSearchResults(res.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <>
      <h1 className="flex justify-center my-4"> Product M </h1>

      <input
        className="border-2 border-black my-4 py-2 px-4"
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>

      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {Products.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={product._id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product.name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product.price}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="font-medium"
                    >
                      Delete
                    </button>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <button
                      onClick={() => handleEdit(product)}
                      className="font-medium"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      <div>
        {isEditing && (
          <form onSubmit={handleUpdate}>
            <h1 className="flex justify-center my-12">Update Product </h1>
            <input
              name="image"
              placeholder="image"
              value={editingProduct.image}
              onChange={handleEditChange}
            />
            <br />
            <input
              name="name"
              placeholder="name"
              value={editingProduct.name}
              onChange={handleEditChange}
            />
            <br />
            <input
              name="description"
              placeholder="description"
              value={editingProduct.description}
              onChange={handleEditChange}
            />
            <br />
            <input
              name="price"
              placeholder="price"
              value={editingProduct.price}
              onChange={handleEditChange}
            />
            <br />
            <button type="submit"> Update Product</button> <br />
            <button onClick={() => setIsEditing(false)}> Cancel</button>
          </form>
        )}
      </div>
    </>
  );
}

export default TestProduct;
