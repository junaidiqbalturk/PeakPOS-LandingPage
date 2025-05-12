import { useEffect } from "react";
import { gsap } from "gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        "#mobile-menu", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to("#mobile-menu", { 
      opacity: 0, 
      duration: 0.3,
      onComplete: onClose
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      id="mobile-menu" 
      className="fixed inset-0 bg-dark bg-opacity-95 z-50 flex flex-col justify-center items-center"
    >
      <button 
        onClick={handleClose}
        className="absolute top-6 right-6"
        aria-label="Close navigation menu"
      >
        <span className="material-icons text-white text-3xl">close</span>
      </button>
      <nav className="flex flex-col items-center space-y-8">
        <a 
          href="#features" 
          className="text-white text-2xl font-space font-medium"
          onClick={handleLinkClick}
        >
          Features
        </a>
        <a 
          href="#benefits" 
          className="text-white text-2xl font-space font-medium"
          onClick={handleLinkClick}
        >
          Benefits
        </a>
        <a 
          href="#testimonials" 
          className="text-white text-2xl font-space font-medium"
          onClick={handleLinkClick}
        >
          Testimonials
        </a>
        <a 
          href="#pricing" 
          className="text-white text-2xl font-space font-medium"
          onClick={handleLinkClick}
        >
          Pricing
        </a>
        <a 
          href="#contact" 
          className="bg-primary text-white px-8 py-3 rounded-full text-xl font-medium mt-4"
          onClick={handleLinkClick}
        >
          Request Demo
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
