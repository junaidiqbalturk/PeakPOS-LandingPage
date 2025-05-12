import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InteractiveDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Left content animation
      gsap.fromTo(
        leftContentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      // Right content animation
      gsap.fromTo(
        rightContentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      // Stats card animation (pops in)
      gsap.fromTo(
        sectionRef.current.querySelector(".stats-card"),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
      
      // Play button animation
      gsap.fromTo(
        sectionRef.current.querySelector(".play-button"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 70%",
          }
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      if (sectionRef.current) {
        const triggers = ScrollTrigger.getAll().filter(
          t => t.vars.trigger === sectionRef.current || 
              t.vars.trigger === rightContentRef.current
        );
        triggers.forEach(t => t.kill());
      }
    };
  }, []);

  return (
    <section id="demo" ref={sectionRef} className="py-24 relative bg-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftContentRef}>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6 text-dark">
              Experience Next-Level <span className="text-gradient">Transaction Speed</span>
            </h2>
            <p className="text-lg text-dark opacity-80 mb-6">
              Our AI-powered system processes transactions up to 5x faster than traditional POS systems, reducing wait times and improving customer satisfaction.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 rounded-full p-2">
                  <span className="material-icons text-primary">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Smart Item Recognition</h3>
                  <p className="text-dark opacity-70">Computer vision technology instantly identifies items without barcode scanning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 rounded-full p-2">
                  <span className="material-icons text-primary">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">One-Touch Checkout</h3>
                  <p className="text-dark opacity-70">Streamlined payment process with customer preferences remembered.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 rounded-full p-2">
                  <span className="material-icons text-primary">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Automated Receipt Delivery</h3>
                  <p className="text-dark opacity-70">Digital receipts instantly sent to customer's preferred method.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact" 
                className="bg-primary text-white px-8 py-4 rounded-full font-medium transition btn-hover-effect inline-flex items-center"
              >
                <span>Schedule Live Demo</span>
                <span className="material-icons ml-2">calendar_today</span>
              </a>
            </div>
          </div>
          
          <div ref={rightContentRef} className="relative">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-1">
              <div className="rounded-3xl bg-dark-light h-[400px] w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <span className="material-icons text-5xl text-primary">touch_app</span>
                  </div>
                  <p className="text-light text-lg font-medium mb-2">AI-Powered POS System Demo</p>
                  <p className="text-light-dark text-sm max-w-xs text-center">Intuitive touchscreen interface with smart item recognition</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 play-button">
              <button className="w-20 h-20 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition shadow-lg group">
                <span className="material-icons text-white text-4xl group-hover:scale-110 transition">play_arrow</span>
              </button>
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-lg max-w-xs stats-card">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 bg-success/10 rounded-full mr-4">
                  <span className="material-icons text-success">timer</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark">3.2 seconds</h4>
                  <p className="text-sm text-dark opacity-70">Average transaction time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
