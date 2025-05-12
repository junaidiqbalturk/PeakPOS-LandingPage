import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Section {
  id: string;
  label: string;
}

const NavigationDots = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  
  // Define the sections to navigate to
  const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "demo", label: "Demo" },
    { id: "benefits", label: "Benefits" },
    { id: "testimonials", label: "Testimonials" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    // Create scroll triggers for each section to update active dot
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id)
      });
    });

    // Animation for the navigation dots container
    gsap.fromTo(
      dotsRef.current,
      { opacity: 0, x: 20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 1.5,
        ease: "power2.out" 
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      ref={dotsRef}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-40"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section.id);
          }}
          className={`navigation-dot ${activeSection === section.id ? "active" : ""}`}
          data-section={section.id}
          aria-label={`Navigate to ${section.label}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
