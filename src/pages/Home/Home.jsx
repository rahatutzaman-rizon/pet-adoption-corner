


import FavoriteBook from './FavoriteBook'
import Bannertext from "./Banner"

import PromoBanner from './PromoBanner'


import { useLoaderData } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import About from '../about/About'
import Ourabout from '../about/Ourabout'
import Business from './Business'

export const Home = () => {
  const categories = useLoaderData();
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));
  return (
    <div>
    <Bannertext></Bannertext>
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-2">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Pet Adoption Categories
        </h2>
            <div   className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
            {
              uniqueCategories.map((category, index)=> 
          <CategoryCard key={index} category={category} />
        )
        }
       

   
</div>
 </div>
 </section>

      <Business></Business>
      
      <FavoriteBook/>
      <PromoBanner/>
     
    <Ourabout></Ourabout>
    <About></About>
     
    </div>
  )
}
