// components/Skills.js
import { useState } from 'react';

export default function Skills() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-3xl mx-auto p-4  space-y-4">
      <div>
        <button
          onClick={() => toggleSection('programmingLanguages')}
          className="w-full text-left py-2 font-bold text-lg text-secondaryColor "
        >
          {openSection === 'programmingLanguages' ? '▼' : '▶'} Programming Languages
        </button>
        {openSection === 'programmingLanguages' && (
          <div className="pl-4 pt-2 text-secondaryColor ">
            Java • Python • JavaScript • PHP • C/C++
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection('softwareTools')}
          className="w-full text-left py-2 font-bold text-lg text-secondaryColor  "
        >
          {openSection === 'softwareTools' ? '▼' : '▶'} Software & Tools
        </button>
        {openSection === 'softwareTools' && (
          <div className="pl-4 pt-2 text-secondaryColor ">
            HTML, CSS • Git VCS • Oracle database • MS SQL Server • PostgreSQL • Docker • MongoDB • Firebase • Flutter • ReactJS • NodeJS • NextJS • Tailwind CSS • Bootstrap CSS
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggleSection('interest')}
          className="w-full text-left py-2 font-bold text-lg  text-secondaryColor "
        >
          {openSection === 'interest' ? '▼' : '▶'} Interest
        </button>
        {openSection === 'interest' && (
          <div className="pl-1 text-secondaryColor font-normal">
            Software Development • Data Analysis • Machine Learning and Deep Learning • Product Documentation, Development and Management
          </div>
        )}
      </div>
    </div>
  );
}
