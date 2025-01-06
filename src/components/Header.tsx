import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMedium, FaYoutube, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder-avatar.jpg"
                alt="Akilesh Anandharaj"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Akilesh Anandharaj</h1>
              <p className="text-sm text-gray-600">Data Engineer | Cloud Specialist | Analytics Enthusiast</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://medium.com" icon={<FaMedium />} label="Medium" />
            <SocialLink href="https://youtube.com" icon={<FaYoutube />} label="YouTube" />
            <SocialLink href="https://example.com" icon={<FaGlobe />} label="Website" />
          </div>
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
      className="text-gray-600 hover:text-gray-900 transition-colors"
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
    </Link>
  );
};

export default Header; 