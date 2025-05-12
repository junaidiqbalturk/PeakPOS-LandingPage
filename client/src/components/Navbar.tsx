import { useState, useEffect } from "react";
import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white backdrop-blur shadow-lg py-2" 
            : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="material-icons text-white">point_of_sale</span>
              </div>
              <span className="ml-2 text-xl font-bold font-space text-dark">
                Nexus<span className="text-primary">POS</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-dark hover:text-primary transition font-medium">
                Features
              </a>
              <a href="#benefits" className="text-dark hover:text-primary transition font-medium">
                Benefits
              </a>
              <a href="#testimonials" className="text-dark hover:text-primary transition font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-dark hover:text-primary transition font-medium">
                Pricing
              </a>
              <a 
                href="#contact" 
                className="bg-primary text-white px-6 py-2 rounded-full font-medium transition btn-hover-effect"
              >
                Request Demo
              </a>
            </nav>
            
            {/* Mobile Menu Trigger */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex items-center"
              aria-label="Open navigation menu"
            >
              <span className="material-icons text-dark">menu</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
