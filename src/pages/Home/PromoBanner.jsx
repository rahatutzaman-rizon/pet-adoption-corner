import { Link } from "react-router-dom";


const PromoBanner = () => {
    return (
        <div className='mt-16 py-12  px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                {/* picture */}
                <div>
                    <img src="https://i.ibb.co/hmLBcmD/MACA-Shelter-of-the-year.jpg" alt="" className='w-96' />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Pet Awards </h2>
                    <br />
                    <p>
                    We may consider nominations in a different category. Depending on nominations, there may be more than one winner in some categories, and we reserve the right not to choose a winner in a category.
                    </p>
                    <br />
                <Link to="https://thepeoplespetawards.co.uk/" className=" btn btn-info h-8">Award </Link>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner;