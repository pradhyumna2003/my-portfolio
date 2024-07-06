// components/Card.js
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Summary() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={clsx(
        'p-4  mx-4 bg-primaryColor  rounded-lg shadow-lg transition-transform duration-500 ',
        {
          'transform translate-x-0': loaded,
          'transform translate-x-full': !loaded,
        }
      )}
    >
        <h4 className='text-start font-bold text-2xl text-secondaryColor'>Career Summary</h4>
      <p className="pl-1 text-secondaryColor font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}
