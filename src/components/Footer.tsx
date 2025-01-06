const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Akilesh Anandharaj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;