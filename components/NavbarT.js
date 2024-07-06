// components/Navbar.js
import { useState } from "react";
export default function NavbarT() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-textColorPrimary text-white fixed z-50 w-full top-0 shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <svg
                    className="w-16 h-16 p-3"
                    viewBox="0 0 154 174"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M86 94C86.6733 88.3144 18.4408 20.1989 23.2287 17.0568C28.0165 13.9148 33.8892 12.3438 40.8466 12.3438C45.9337 12.3438 50.3849 13.1667 54.2003 14.8125C57.9782 16.4583 60.9332 18.7214 63.0653 21.6016C65.16 24.4818 66.2074 27.7547 66.2074 31.4205C66.2074 34.4877 65.478 37.1248 64.0192 39.3317C62.5229 41.5012 60.6153 43.3153 58.2962 44.7741C55.977 46.1955 53.5457 47.3738 51.0021 48.309C48.4586 49.2067 46.1207 49.9361 43.9886 50.4972L32.3181 53.6392C29.3257 54.4247 25.9967 55.5095 22.3309 56.8935C18.6278 58.2775 15.093 60.1664 11.7265 62.5604C8.32266 64.9169 5.51726 67.9467 3.31034 71.6499C1.10343 75.353 -2.28882e-05 79.8977 -2.28882e-05 85.2841C-2.28882e-05 91.4934 1.62711 97.1042 4.88137 102.116C8.09823 107.129 12.8113 111.112 19.0205 114.067C25.1924 117.022 32.6922 118.5 41.5199 118.5C49.749 118.5 56.8747 117.172 62.897 114.516C68.8818 111.861 73.5949 108.157 77.0362 103.407C80.4401 98.6565 106.17 68.2273 106.619 61.9432H91.6618C91.2878 66.2822 66.6188 94.785 64.0753 97.6278C61.4943 100.433 58.24 102.528 54.3125 103.912C50.3475 105.259 46.0833 105.932 41.5199 105.932C36.2083 105.932 31.4391 105.072 27.2123 103.351C22.9855 101.593 19.6378 99.1615 17.169 96.0568C14.7003 92.9148 13.4659 89.2491 13.4659 85.0597C13.4659 81.2443 14.5319 78.1397 16.664 75.7457C18.7961 73.3518 21.6015 71.4067 25.0802 69.9105C28.5589 68.4143 32.3182 67.1051 36.3579 65.983L50.4971 61.9432C59.4744 59.3622 66.5814 55.6778 71.8182 50.8899C77.0549 46.102 79.6733 39.8366 79.6733 32.0938C79.6733 25.66 77.9339 20.0492 74.4552 15.2614C70.9391 10.4361 66.2261 6.69555 60.316 4.03977C54.3686 1.34659 47.7291 0 40.3977 0C32.9915 0 26.4081 1.32789 20.6477 3.98367C14.8873 6.60204 10.3238 10.1929 6.95737 14.7564C3.55348 19.3198 69.187 86.1412 69 91.939L88.5 110L86 94Z"
                        fill="#E7F0DC"
                    />
                    <path
                        d="M76 173.909L77.5 82L86 71.3438L92 61.5L103 59H114.827C123.841 59 131.21 60.6271 136.933 63.8814C142.694 67.0983 146.958 71.456 149.726 76.9545C152.494 82.4531 153.878 88.5876 153.878 95.358C153.878 102.128 152.494 108.281 149.726 113.817C146.995 119.353 142.768 123.767 137.045 127.059C131.322 130.313 119.44 131.5 110.5 131.5L82 106L90.5 96L114.602 119.597C120.774 119.597 125.73 118.531 129.471 116.398C133.211 114.266 135.923 111.386 137.607 107.758C139.327 104.092 140.188 99.9588 140.188 95.358C140.188 90.7571 139.327 86.6425 137.607 83.0142C135.923 79.3859 133.193 76.5431 129.415 74.4858C125.637 72.3911 120.625 71.3438 114.378 71.3438H110.5H105.5L100.5 73L97 78L93.5 83.0142L90.5 86.5V96L89.9148 173.909H76Z"
                        fill="#E7F0DC"
                    />
                    </svg>
                    <div className="text-xl  font-bold">Portfolio</div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a
                            href="#"
                            className="px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                            >
                            Home
                            </a>
                            <a
                            href="#"
                            className="px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                            >
                            Projects
                            </a>
                            <a
                            href="#"
                            className="px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                            >
                            Connect & Contact
                            </a>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden">
                    <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-10 w-10"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {isOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3">
                <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                >
                Home
                </a>
                <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                >
                Projects
                </a>
                <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primaryColor hover:text-secondaryColor hover:scale-115 hover:font-bold"
                >
                Connect & Contact
                </a>
            </div>
        </div>
        )}
    </nav>
    );
  }
  