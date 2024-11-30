import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  
  HeartHandshake, 
 
  UserPlus, 
  CheckCircle, 
  Clock, 
  Star 
} from 'lucide-react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PetAdoptionVolunteer = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;

    // Background parallax effect
    gsap.to(section, {
      backgroundPosition: '50% 50%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Staggered title animation
    gsap.fromTo(
      title?.children,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );

    // Image subtle float animation
    gsap.to(image, {
      y: 20,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'power1.inOut'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your interest in volunteering!');
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.7,
        type: 'spring',
        stiffness: 120
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-primary-600 to-primary-400 py-16 overflow-hidden"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" opacity=\"0.1\"%3E%3Cpath fill=\"%23a855f7\" d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\"%3E%3C/path%3E%3C/svg%3E')",
        backgroundSize: '100px 100px'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Volunteer Information Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <div ref={titleRef}>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-primary-600 mb-4 flex items-center justify-center lg:justify-start"
            >
              <HeartHandshake className="mr-4 text-primary-600" size={48} />
              Join Our Volunteer Team
            </motion.h2>
            <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed">
              Make a profound difference in the lives of animals! Our comprehensive volunteer program 
              empowers passionate individuals to support pet adoption, provide compassionate care, 
              and create lasting connections with furry friends seeking their forever homes.
            </p>
          </div>

          {/* Volunteer Benefits */}
          <div className="space-y-4">
            <motion.div 
              variants={benefitVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <CheckCircle className="mr-4 text-primary-600" size={32} />
              <span className="text-gray-800 font-semibold">
                Make a Meaningful Impact in Animal Welfare
              </span>
            </motion.div>
            <motion.div 
              variants={benefitVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <Star className="mr-4 text-primary-600" size={32} />
              <span className="text-gray-800 font-semibold">
                Professional Development and Networking
              </span>
            </motion.div>
            <motion.div 
              variants={benefitVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <Clock className="mr-4 text-primary-600" size={32} />
              <span className="text-gray-800 font-semibold">
                Flexible Scheduling and Supportive Environment
              </span>
            </motion.div>
          </div>
        </div>

        {/* Volunteer Registration Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.6,
              type: 'spring',
              stiffness: 120
            }
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 max-w-md bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-primary-600"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-primary-600 flex items-center justify-center">
            <UserPlus className="mr-2 text-primary-600" />
            Volunteer Application
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-primary-700 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-primary-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="availability" className="block text-primary-700 mb-2 font-medium">
                Availability
              </label>
              <select
                id="availability"
                className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              >
                <option value="">Select your availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="both">Both Weekdays and Weekends</option>
              </select>
            </div>
            <div>
              <label htmlFor="interests" className="block text-primary-700 mb-2 font-medium">
                Volunteer Interests
              </label>
              <textarea
                id="interests"
                className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                rows="4"
                placeholder="Tell us about your interests and motivation"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center font-bold"
            >
              <UserPlus className="mr-2" />
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PetAdoptionVolunteer;