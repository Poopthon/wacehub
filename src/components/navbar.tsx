import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-lg border-b border-gray-200 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-105">
            <Link href="/">Wace Hub</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Team
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Poopthon/wacehub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwt78lxMRd5q1rLpKeZwCTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
