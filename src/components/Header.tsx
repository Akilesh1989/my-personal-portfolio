import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMedium, FaYoutube, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold text-white">Akilesh Anandharaj</h1>
              <p className="text-sm text-gray-400">Data Engineer | Cloud Specialist | Analytics Enthusiast</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-400 hover:text-white">About</Link>
            <Link href="#skills" className="text-gray-400 hover:text-white">Skills</Link>
            <Link href="#experience" className="text-gray-400 hover:text-white">Experience</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link>
          </nav>
          
        </div>
      </div>
    </header>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
    </Link>
  );
};

export default Header;