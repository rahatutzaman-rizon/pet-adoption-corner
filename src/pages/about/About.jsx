

const About = () => {
  return (
    <div className="mt-4 mb-12">
    <div className="bg-cyan-300  py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Pet Adoption Tips and Benefits</h1>
        <p className="text-lg text-white">
          Find the perfect companion and experience the joy of pet adoption. Explore our tips and discover the many benefits of bringing a furry friend into your home.
        </p>
      </div>
    </div>

    <div className="container mx-auto p-4 flex">
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Pet Adoption Tips</h2>
        <ul className="list-disc list-inside">
          <li>Visit local shelters to find your perfect pet.</li>
          <li>Consider the size and energy level that fits your lifestyle.</li>
          <li>Take your time to bond with the pet before making a decision.</li>
          <li>Ensure your living situation is suitable for a pet.</li>
          <li>Be prepared for the responsibilities of pet ownership.</li>
        </ul>
      </section>

      <section className="mb-8 mt-6">
        <h2 className="text-3xl font-bold mb-4">Benefits of Pet Adoption</h2>
        
        <ul className="list-disc list-inside">
          <li>Save a life by providing a home for a pet in need.</li>
          <li>Experience the unconditional love and companionship of a pet.</li>
          <li>Support local animal shelters and reduce pet overpopulation.</li>
          <li>Enjoy the mental and physical health benefits of having a pet.</li>
          <li>Create a lasting bond with a grateful and loyal companion.</li>
        </ul>
      </section>
    </div>
  </div>
  )
}

export default About