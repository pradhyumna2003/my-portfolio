// components/EducationCard.js
import { useState } from 'react';
import clsx from 'clsx';

const educationData = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'University of Technology',
    year: '2020',
  },
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Tech University',
    year: '2017',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'College of Tech',
    year: '2014',
  },
];

export default function EducationHistory() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % educationData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  return (
    <div className="relative w-full mx-auto ">
      <div className="relative w-4/5 h-64 flex items-center justify-center overflow-hidden mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={clsx(
              'absolute w-full h-fit p-6 bg-primaryColor rounded-lg shadow-lg transition-transform duration-500 ',
              {
                'transform translate-x-0': index === current,
                'transform translate-x-full': index > current,
                'transform -translate-x-full': index < current,
              }
            )}
          >
            <h3 className="text-2xl text-textColorPrimary font-bold">{edu.degree}</h3>
            <p className="text-textColorPrimary font-medium">{edu.institution}</p>
            <p className="text-textColorPrimary text-xl font-medium">{edu.year}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left- top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full shadow-md focus:outline-none ml-auto"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-1/5 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full shadow-md focus:outline-none mr-auto"
      >
        &#8594;
      </button>
    </div>
  );
}
