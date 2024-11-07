import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    forAnimal: '',
    image: '',
    quantity: 0,
    description: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://pet-adoption-corner-server.vercel.app/shop');
      setProducts(response.data);
    } catch (error) {
      toast.error('Error fetching products');
      console.error('Error fetching products:', error);
    }
  };

  const handleCreate = () => {
    setSelectedProduct(null);
    setFormData({ name: '', forAnimal: '', image: '', quantity: 0, description: '' });
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData(product);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://pet-adoption-corner-server.vercel.app/shop/${id}`);
      fetchProducts();
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Error deleting product');
      console.error('Error deleting product:', error);
    }
  };

  const handleSave = async () => {
    try {
      if (selectedProduct) {
        await axios.put(`https://pet-adoption-corner-server.vercel.app/shop/${selectedProduct._id}`, formData);
        toast.success('Product updated successfully');
      } else {
        await axios.post('https://pet-adoption-corner-server.vercel.app/shop', formData);
        toast.success('Product created successfully');
      }
      fetchProducts();
      setShowModal(false);
    } catch (error) {
      toast.error('Error saving product');
      console.error('Error saving product:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto py-6">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Pet Shop</h1>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleCreate}
        >
          Create New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Name</th>
              <th className="border p-3">For Animal</th>
              <th className="border p-3">Quantity</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="text-center hover:bg-gray-50"
              >
                <td className="border p-3">{product.name}</td>
                <td className="border p-3">{product.forAnimal}</td>
                <td className="border p-3">{product.quantity}</td>
                <td className="border p-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded mr-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              {selectedProduct ? 'Edit Product' : 'Create New Product'}
            </h3>
            <form>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <input
                type="text"
                name="forAnimal"
                value={formData.forAnimal}
                onChange={handleInputChange}
                placeholder="For Animal"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-3 border rounded-lg mb-6"
              ></textarea>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopList;