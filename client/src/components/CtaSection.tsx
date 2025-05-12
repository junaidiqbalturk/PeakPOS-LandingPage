import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && ctaBoxRef.current) {
      // Animate CTA box with scale effect
      gsap.fromTo(
        ctaBoxRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={ctaBoxRef}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-3xl p-1"
        >
          <div className="bg-dark rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6 text-white">
              Ready to <span className="accent-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-light-dark text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using NexusPOS to streamline operations, boost sales, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent-dark text-dark px-8 py-4 rounded-full font-medium text-lg transition btn-hover-effect inline-flex items-center justify-center"
              >
                <span>Schedule a Demo</span>
                <span className="material-icons ml-2">arrow_forward</span>
              </a>
              <a 
                href="#pricing" 
                className="border-2 border-light text-light hover:bg-light hover:text-dark px-8 py-4 rounded-full font-medium text-lg transition inline-flex items-center justify-center"
              >
                <span>View Pricing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
