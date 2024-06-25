import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PetListingCard from './PetListingCard';






const PetListing = () => {

const samplePetsData =useLoaderData();
//const {name,picture,age,location}=brand;



  const [pets, setPets] = useState(samplePetsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

  // scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Fetch more data or update state to load more pets
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
        
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // Filter pets 
  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || pet.category === selectedCategory)
  );

  return (
     
    <div className="bg-gradient-to-b from-blue-400 to-teal-300 min-h-screen my-16">
      <div className="p-4 bg-white mb-4">
        <input
          type="text"
          placeholder="Search pets by name"
          className="px-4 py-4 border rounded-md bg-gray-300 my-4 ml-48"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md ml-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {/* Add your categories here */}
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="fish">Fish</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {filteredPets.map((brand, index) => (
          <PetListingCard key={index} brand={brand}></PetListingCard>
        ))}

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
       


        {

          samplePetsData.map((brand,index)=>
            <PetListingCard
            key={index}
            brand={brand}></PetListingCard> )
        }
     

      {loading && (
        <div className="text-center my-4">
          <span className="text-gray-600 text-4xl">Loading more...</span>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default PetListing;
