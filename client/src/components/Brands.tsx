import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Brands = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Title fade in
      tl.fromTo(
        sectionRef.current.querySelector(".fade-in"),
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );

      // Stagger brand logos
      brandRefs.current.forEach((brand, index) => {
        if (brand) {
          tl.fromTo(
            brand,
            { opacity: 0, y: 20 },
            { opacity: 0.6, y: 0, duration: 0.5 },
            "-=0.4"
          );
        }
      });
    }

    return () => {
      if (sectionRef.current) {
        const triggers = ScrollTrigger.getAll().filter(
          (t) => t.vars.trigger === sectionRef.current
        );
        triggers.forEach((t) => t.kill());
      }
    };
  }, []);

  // Array of SVG logo templates
  const logoSvgs = [
    <svg key="1" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <path d="M5 5h20v20H5z"></path>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>,
    <svg key="2" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <circle cx="15" cy="15" r="10"></circle>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>,
    <svg key="3" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <path d="M5 5l10 20h10L15 5z"></path>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>,
    <svg key="4" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <circle cx="15" cy="15" r="10"></circle>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>,
    <svg key="5" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <rect x="5" y="5" width="20" height="20" rx="10"></rect>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>,
    <svg key="6" className="h-6" viewBox="0 0 100 30" fill="currentColor">
      <path d="M5 15 L15 5 L25 15 L15 25 z"></path>
      <path d="M35 5h60v5H35z"></path>
      <path d="M35 15h45v5H35z"></path>
      <path d="M35 25h30v5H35z"></path>
    </svg>
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-light-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 fade-in">
          <p className="text-dark opacity-70 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logoSvgs.map((svg, index) => (
            <div 
              key={index} 
              className="h-8 flex items-center fade-in"
              ref={el => brandRefs.current[index] = el}
            >
              {svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
