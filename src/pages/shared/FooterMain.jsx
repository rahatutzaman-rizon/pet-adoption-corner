import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaw } from 'react-icons/fa';

const FooterMain = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaPaw className="mr-2 text-yellow-400" /> Pet Corner
            </h3>
            <p className="text-gray-400 mb-4">
              Dedicated to finding loving homes for pets in need. Join us in making a difference in animals' lives.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
              <SocialIcon icon={<FaTwitter />} href="https://twitter.com" />
              <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
              <SocialIcon icon={<FaLinkedinIn />} href="https://linkedin.com" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Our Services" />
              <FooterLink href="/adopt" text="Adopt a Pet" />
              <FooterLink href="/donate" text="Donate" />
              <FooterLink href="/volunteer" text="Volunteer" />
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <ContactItem icon={<FaPhone />} text="01771276400" />
              <ContactItem icon={<FaEnvelope />} text="rizonraha199@gmail.com" />
              <ContactItem icon={<FaMapMarkerAlt />} text="Gulshan Road-3, House: 1223, Dhaka" />
            </ul>
          </div>

          {/* Newsletter Section */}
          {/* <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for pet care tips and adoption updates.</p>
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-2 sm:mb-0"
              />
              <button 
                type="submit" 
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-300 transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Pet Corner by Rahatutzaman Rizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300 ease-in-out"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
    >
      {text}
    </a>
  </li>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-center text-gray-400">
    <span className="mr-2 text-yellow-400">{icon}</span>
    {text}
  </li>
);

export default FooterMain;