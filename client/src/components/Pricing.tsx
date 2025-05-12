import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  buttonStyle: "primary" | "outline";
}

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const planRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Pricing data
  const plans: PricingPlan[] = [
    {
      name: "Standard",
      description: "Perfect for small businesses",
      price: "$49",
      features: [
        "1 Register",
        "Basic AI insights",
        "Cloud backups",
        "24/7 email support"
      ],
      buttonText: "Get Started",
      buttonStyle: "outline"
    },
    {
      name: "Pro",
      description: "For growing businesses",
      price: "$99",
      popular: true,
      features: [
        "3 Registers",
        "Advanced AI analytics",
        "Inventory predictions",
        "Customer recognition",
        "24/7 priority support"
      ],
      buttonText: "Get Started",
      buttonStyle: "primary"
    },
    {
      name: "Enterprise",
      description: "For large operations",
      price: "$249",
      features: [
        "Unlimited registers",
        "Enterprise AI suite",
        "Custom integrations",
        "Advanced voice commands",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "outline"
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

      // Pricing cards staggered animation
      planRefs.current.forEach((plan, index) => {
        gsap.fromTo(
          plan,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: plan,
              start: "top 85%",
            }
          }
        );
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-dark-light text-light">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Simple, <span className="accent-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-light-dark text-lg">
            Choose the plan that best fits your business needs and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => planRefs.current[index] = el}
              className={`${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/20 to-secondary/20" 
                  : "bg-dark"
              } rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-dark px-4 py-1 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold font-space mb-2">{plan.name}</h3>
                <p className="text-light-dark mb-6">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-light-dark ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="material-icons text-accent mr-2 mt-0.5">check</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block text-center py-3 px-6 ${
                    plan.buttonStyle === "primary"
                      ? "bg-accent hover:bg-accent-dark text-dark" 
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  } rounded-full transition-all duration-300 font-medium`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
