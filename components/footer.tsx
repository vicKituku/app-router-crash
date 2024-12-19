const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Victor Kituku. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
