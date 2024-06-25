

const Ourabout = () => {
    return (
        <div>
             <div className="bg-cyan-300 mt-8 mb-12">
      {/* Header Section */}
      <div className="bg-cyan-300  py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Pet Adoption Organization</h1>
          <p className="text-lg text-white ">
            Bringing joy to homes through pet adoption. Learn more about us, our mission, and how you can be a part of it.
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="container mx-auto p-4 flex">
        {/* Left Column - Image */}
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/x8rxDvM/sidebar-ads-050522-dog-adoption.png" // Replace with the actual path to your image
            alt="Organization Image"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Column - Information */}
        <div className="w-1/2 p-4">
          {/* About Us Section */}
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4 ">About Us</h2>
            <p className="mb-4 text-white ">
              We are a passionate pet adoption organization committed to finding loving homes for animals in need. Our mission is to connect families with their perfect furry companions and create lasting bonds.
            </p>
            <p className="text-white ">
              Join us in our journey to make a difference in the lives of animals and bring happiness to homes.
            </p>
          </section>

          {/* Pet Adoption Details Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pet Adoption Details</h2>
            <p className="mb-4 text-white ">
              Discover the joy of adopting a pet from our organization. Our adoption process is designed to ensure the well-being of the animals and the happiness of their new families.
            </p>
            <p className="text-white ">
              Visit our shelters and explore the wonderful world of pet adoption with us.
            </p>
          </section>

          {/* Location and Contact Section */}
          <section>
            <h2 className="text-2xl  font-bold mb-4">Location and Contact</h2>
            <p className="mb-4 text-white ">
              Visit us at:
              <br />
            Mirpur 12 road/a/11 ,Dhaka
            </p>
            <p className="mb-4 text-white ">
              Contact us at:
              <br />
              Phone: 01771276400
            </p>
            <p className="text-white ">
              Reach out to us for any inquiries or to learn more about our adoption process.
            </p>
          </section>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Ourabout;