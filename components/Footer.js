// components/Footer.js
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondaryColor text-secondaryColor py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center space-x-6">
       
          <a href="https://www.linkedin.com/in/pradhyumna-s/" className="text-primaryColor hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/pradhyumna2003" className="text-primaryColor hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="mailto:pradhyumna.dev@gmail.com" className="text-primaryColor hover:text-white">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/pradhyumna_s_/" className="text-primaryColor hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-4 text-center text-primaryColor font-thin font-sans">
            
          &copy; 2024 Pradhyumna S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
