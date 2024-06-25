
import favBook from '../../assets/banner-books/book3.jpg'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-6xl my-5 font-bold md:w-3/4 leading-snug'>Find Your Favorite <span className='text-pink-600'>Pet here</span></h2>
            <p className='mb-10 text-sm md:w-5/6'>pet adoption is a compassionate and responsible choice that benefits both animals and the communities they become a part of.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>15</h3>
                <p className='text-base'>Pet Count</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>8</h3>
                <p className='text-base'>Regsiter User</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>12000 $</h3>
                <p className='text-base'>Total Donation</p>
              </div>
            </div>
            <Link to="/petlisting" className='block mt-8'><button className='bg-green-400 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore Now</button></Link>
        </div>
    </div>
  )
}

export default FavoriteBook