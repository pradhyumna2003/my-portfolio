// components/Connectcontact.js
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Connectcontact() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-textColorSecondary rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4  text-center">Connect & Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Availability */}
        <div className="p-4 bg-primaryColor rounded-lg shadow-md text-textColorPrimary">
          <h3 className="text-xl font-semibold mb-2">Available for :</h3>
          <ul className="list-disc pl-5">
            <li>Paid collobaration</li>
            <li>Freelancing</li>
            <li>Research & Publication</li>
          </ul>
        </div>
        {/* Social Connections */}
        <div className="p-4 bg-primaryColor rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-textColorPrimary">Social Connections</h3>
          <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/pradhyumna-s/" className="text-textColorPrimary hover:text-textColorSecondary">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/pradhyumna2003" className="text-textColorPrimary hover:text-textColorSecondary">
            <FaGithub size={30} />
          </a>
          <a href="mailto:pradhyumna.dev@gmail.com" className="text-textColorPrimary hover:text-textColorSecondary">
            <FaEnvelope size={30} />
          </a>
          <a href="https://www.instagram.com/pradhyumna_s_/" className="text-textColorPrimary hover:text-textColorSecondary">
            <FaInstagram size={30} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
