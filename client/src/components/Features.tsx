import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Feature item type definition
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Feature data
  const features: FeatureItem[] = [
    {
      icon: "smart_toy",
      title: "AI-Powered Insights",
      description: "Real-time sales analytics and personalized recommendations to optimize your business strategy."
    },
    {
      icon: "bolt",
      title: "Lightning Fast Checkout",
      description: "Process transactions in seconds with our optimized workflow and smart payment processing."
    },
    {
      icon: "inventory_2",
      title: "Smart Inventory",
      description: "Predictive inventory management that automatically orders stock when you're running low."
    },
    {
      icon: "payments",
      title: "Contactless Payments",
      description: "Support for all modern payment methods including NFC, QR codes, and cryptocurrency."
    },
    {
      icon: "person",
      title: "Customer Recognition",
      description: "Facial recognition and personalized customer profiles for tailored service experiences."
    },
    {
      icon: "auto_awesome",
      title: "Voice Commands",
      description: "Hands-free operation with advanced voice recognition for faster service and accessibility."
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Feature cards staggered animation
      featureRefs.current.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.1 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 85%",
            }
          }
        );
      });

      // Button animation
      gsap.fromTo(
        sectionRef.current.querySelector(".explore-btn"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".explore-btn"),
            start: "top 90%",
          }
        }
      );
    }
    
    return () => {
      // Clean up ScrollTrigger instances
      if (sectionRef.current) {
        const triggers = ScrollTrigger.getAll().filter(
          t => t.vars.trigger === sectionRef.current || 
               t.vars.trigger === titleRef.current || 
               featureRefs.current.includes(t.vars.trigger as HTMLDivElement)
        );
        triggers.forEach(t => t.kill());
      }
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-32 bg-dark text-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 accent-gradient">
            Futuristic Features
          </h2>
          <p className="text-light-dark text-lg">
            Our AI-powered POS system reimagines what's possible with cutting-edge technology and intuitive design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="feature-card bg-dark-light rounded-2xl p-8 transition-all duration-300 hover:shadow-glow"
            >
              <div className="card-icon h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                <span className="material-icons text-3xl text-accent">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-space mb-3">{feature.title}</h3>
              <p className="text-light-dark">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center explore-btn">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold py-4 px-8 rounded-full transition btn-hover-effect text-lg"
          >
            <span>Explore All Features</span>
            <span className="material-icons">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
