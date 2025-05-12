import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      leftContentRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    ).fromTo(
      rightContentRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.7"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 lg:min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" ref={leftContentRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight text-dark mb-6">
              <span className="text-gradient">AI-Powered</span> Point of Sale for the Future
            </h1>
            <p className="text-lg md:text-xl text-dark opacity-80 mb-8 max-w-lg">
              Transform your business with our next-generation POS system that harnesses the power of AI to streamline operations, boost sales, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg transition btn-hover-effect inline-flex items-center justify-center"
              >
                <span>Get Started</span>
                <span className="material-icons ml-2">east</span>
              </a>
              <a 
                href="#features" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium text-lg transition flex items-center justify-center"
              >
                <span className="material-icons mr-2">play_circle</span>
                <span>See How It Works</span>
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light flex items-center justify-center">
                  <span className="material-icons text-primary text-xs">person</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-light flex items-center justify-center">
                  <span className="material-icons text-secondary text-xs">person</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-accent-light flex items-center justify-center">
                  <span className="material-icons text-accent text-xs">person</span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-sm font-medium text-dark">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="material-icons text-yellow-400">star</span>
                    ))}
                  </div>
                  <span className="ml-2">5.0 (2,300+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2" ref={rightContentRef}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-primary-light/30 to-transparent opacity-70 rounded-3xl"></div>
              <div className="relative rounded-3xl shadow-xl w-full bg-gradient-to-r from-primary-light to-secondary p-1">
                <div className="rounded-3xl bg-light h-[400px] w-full flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <span className="material-icons text-6xl text-primary mb-4">point_of_sale</span>
                    <p className="text-dark font-medium">NextGen POS Interface</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-lg max-w-xs">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <span className="material-icons text-accent-dark">bolt</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Lightning Fast Checkout</h3>
                    <p className="text-sm text-dark opacity-70">Process transactions 5x faster than traditional POS systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
