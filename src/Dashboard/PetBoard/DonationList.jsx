import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Adjust this if your root element has a different ID

const CampaignsTable = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    description: '',
    type: '',
    target: 0,
    raised: 0,
    donors: 0,
    daysLeft: 0,
    priority: 'low',
    imageUrl: '',
    category: 'General',
    lastUpdate: ''
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://pet-adoption-corner-server.vercel.app/donation');
      setCampaigns(response.data.campaigns);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCampaign = async () => {
    try {
      await axios.post('https://pet-adoption-corner-server.vercel.app/donation', newCampaign);
      fetchCampaigns();
      setNewCampaign({
        title: '',
        description: '',
        type: '',
        target: 0,
        raised: 0,
        donors: 0,
        daysLeft: 0,
        priority: 'low',
        imageUrl: '',
        category: 'General',
        lastUpdate: ''
      });
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding new campaign:', error);
    }
  };

  const handleDeleteCampaign = async (id) => {
    try {
      await axios.delete(`https://pet-adoption-corner-server.vercel.app/donation/${id}`);
      fetchCampaigns();
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const handleUpdateCampaign = async () => {
    try {
      await axios.put(`https://pet-adoption-corner-server.vercel.app/donation/${currentCampaign._id}`, currentCampaign);
      fetchCampaigns();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating campaign:', error);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (campaign) => {
    setCurrentCampaign(campaign);
    setIsEditModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6 lg:p-4 w-full ">
      <h2 className="text-3xl font-bold text-primary-600 mb-6">Donation Campaigns</h2>

      {loading ? (
        <p className="text-center text-primary-600">Loading campaigns...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-primary-600">
                <th className="py-3 px-4 text-left">Title</th>
               
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Target</th>
                <th className="py-3 px-4 text-left">Raised</th>
                <th className="py-3 px-4 text-left">Donors</th>
                <th className="py-3 px-4 text-left">Days Left</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Last Update</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4">{campaign.title}</td>
                  
                  <td className="py-3 px-4">{campaign.type}</td>
                  <td className="py-3 px-4">${campaign.target}</td>
                  <td className="py-3 px-4">${campaign.raised}</td>
                  <td className="py-3 px-4">{campaign.donors}</td>
                  <td className="py-3 px-4">{campaign.daysLeft}</td>
                  <td className="py-3 px-4">{campaign.priority}</td>
                  <td className="py-3 px-4">{campaign.category}</td>
                  <td className="py-3 px-4">{campaign.lastUpdate}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded"
                      onClick={() => openEditModal(campaign)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded"
                      onClick={() => handleDeleteCampaign(campaign._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={openAddModal}
          className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition-colors"
        >
          Add New Campaign
        </button>
      </div>

      {/* Add Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        contentLabel="Add New Campaign"
        className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-10 outline-none"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Add New Campaign</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(newCampaign).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'target' || field === 'raised' || field === 'donors' || field === 'daysLeft' ? 'number' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newCampaign[field]}
                onChange={(e) => setNewCampaign({ ...newCampaign, [field]: e.target.value })}
                className="border p-2 rounded text-primary-600"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={() => setIsAddModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleAddCampaign} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Campaign"
        className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-10 outline-none"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Edit Campaign</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(newCampaign).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-600 font-semibold mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
  type={
    ['target', 'raised', 'donors', 'daysLeft'].includes(field) ? 'number' : 'text'
  }
  value={currentCampaign?.[field] || ''}
  onChange={(e) => setCurrentCampaign((prevState) => ({
    ...prevState,
    [field]: e.target.value
  }))}
  className="border p-2 rounded text-primary-600"
/>

            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={() => setIsEditModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleUpdateCampaign} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CampaignsTable;
