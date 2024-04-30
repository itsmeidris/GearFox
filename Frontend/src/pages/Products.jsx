import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Axios } from "axios";
function Products() {
  const Products = ["Product", "Description", "Price", "Delete"];
  const [products, setProducts] = useState([]);

  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  // const [image, setImage] = useState("");  const [name, setName] = useState("");

  const getProductData = async () => {
    try {
      const res = await axios.get("http://localhost:5454/products");
      if (res.status === 201) {
        const productsData = res.data;
        setProducts(productsData);
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

  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  //   image: "",
  //   price: 0,
  // });
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
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Update

  // const handleEdit = (product) => {
  //   setFormData({
  //     namee: product.name,
  //     description: product.description,
  //     image: product.image,
  //     price: product.price,
  //   });
  // };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

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

    setEditingProduct((pervProduct) => ({
      ...pervProduct,

      [name]: value,
    }));
  };

  const updateProduct = async (productId, updateProductData) => {
    try {
      await axios.put(
        `http://localhost:5454/products/${productId}`,
        updateProductData
      );
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Updating product:", editingProduct);
    await updateProduct(editingProduct._id, {
      name: editingProduct.name,
      description: editingProduct.description,
      price: editingProduct.price,
    });
    setIsEditing(true);
  };

  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // const handleSearch = async () => {
  //   try {
  //     const res = await axios.get(`/products?search=${searchTerm}`);
  //     setSearchResults(res.data);
  //   } catch (error) {
  //     console.error("Error searching products:", error);
  //   }
  // };
  const [searchUser, setSearchUser] = useState("");
  const handleSearchChange = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchUser !== "") {
      const usersFiltered = users.filter((user) => {
        return (
          user.username.toLowerCase().includes(searchUser.toLowerCase()) ||
          user.email.toLowerCase().includes(searchUser.toLowerCase())
        );
      });
      setFilteredUsers(usersFiltered);
    } else {
      setFilteredUsers(users); // Reset filtered users to all users when search input is empty
    }
  };

  return (
    <>
      <h1 className="flex justify-center my-4"> Product Management </h1>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchUser}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 ml-2 border border-gray-300 bg-blue-600 text-white rounded-md focus:outline-none "
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    
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
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                      onClick={() => deleteProduct(product._id)}
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

      {/* -------------------------- */}

      <h1 className="flex justify-center my-8"> Add product </h1>
      <form onSubmit={postProduct}>
        <label>
          Product image :
          <input
            name="image"
            placeholder="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Name :
          <input
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Description :
          <input
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Price :
          <input
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>

      {/* ----------------------------- */}
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

export default Products;
