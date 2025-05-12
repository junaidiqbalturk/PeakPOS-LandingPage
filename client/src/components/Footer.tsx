import { Link } from "wouter";

interface NavLink {
  text: string;
  href: string;
}

interface NavCategory {
  title: string;
  links: NavLink[];
}

const Footer = () => {
  // Footer navigation data
  const navCategories: NavCategory[] = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Benefits", href: "#benefits" },
        { text: "Pricing", href: "#pricing" },
        { text: "Security", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "#" },
        { text: "API Reference", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Contact", href: "#contact" },
        { text: "Partners", href: "#" }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: "facebook", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "instagram", href: "#" }
  ];

  return (
    <footer className="bg-dark-dark text-light py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="material-icons text-white">point_of_sale</span>
              </div>
              <span className="ml-2 text-xl font-bold font-space text-white">
                Nexus<span className="text-primary">POS</span>
              </span>
            </Link>
            <p className="text-light-dark">
              Next-generation point of sale system powered by advanced AI technology.
            </p>
          </div>
          
          {navCategories.map((category, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-lg">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-light-dark hover:text-accent transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-dark-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-dark text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexusPOS. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-light-dark hover:text-accent transition"
                aria-label={`Follow us on ${social.icon}`}
              >
                <span className="material-icons">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
