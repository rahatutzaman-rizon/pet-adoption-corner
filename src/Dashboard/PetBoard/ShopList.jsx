import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

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
      const response = await axios.get('http://localhost:5000/shop');
      setProducts(response.data);
    } catch (error) {
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
      await axios.delete(`http://localhost:5000/shop/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSave = async () => {
    try {
      if (selectedProduct) {
        await axios.put(`http://localhost:5000/shop/${selectedProduct._id}`, formData);
      } else {
        await axios.post('http://localhost:5000/shop', formData);
      }
      fetchProducts();
      setShowModal(false);
    } catch (error) {
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
      <h1 className="text-4xl font-bold text-center mb-6">Pet Shop</h1>
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4" onClick={handleCreate}>Create New Product</button>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">For Animal</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="text-center">
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.forAnimal}</td>
              <td className="border p-2">{product.quantity}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(product)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Product Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
      >
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{selectedProduct ? 'Edit Product' : 'Create New Product'}</h3>
          <form>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full p-3 border rounded-lg mb-4" />
            <input type="text" name="forAnimal" value={formData.forAnimal} onChange={handleInputChange} placeholder="For Animal" className="w-full p-3 border rounded-lg mb-4" />
            <input type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" className="w-full p-3 border rounded-lg mb-4" />
            <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" className="w-full p-3 border rounded-lg mb-4" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full p-3 border rounded-lg mb-6"></textarea>
            <div className="flex justify-between">
              <button type="button" className="bg-green-500 text-white px-6 py-2 rounded-lg" onClick={handleSave}>Save</button>
              <button type="button" className="bg-gray-500 text-white px-6 py-2 rounded-lg" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ShopList;
