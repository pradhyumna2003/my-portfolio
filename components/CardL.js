// components/Card.js
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function CardR({ title, content }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={clsx(
        'p-4 mx-4 my-6 bg-primaryColor rounded-lg shadow-lg transition-transform duration-500 text-textColorPrimary',
        {
          'transform translate-x-0': loaded,
          'transform -translate-x-full': !loaded,
        }
      )}
    >
      <h4 className="text-start font-bold text-2xl text-secondaryColor">{title}</h4>
      <p className="pl-1 text-secondaryColor font-normal">
        
      </p>
      {content}
    </div>
  );
}
