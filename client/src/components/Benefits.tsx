import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef1 = useRef<HTMLDivElement>(null);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[][]>([[], []]);

  // Data for the benefit items
  const benefitsData: BenefitItem[][] = [
    [
      {
        icon: "analytics",
        title: "Predictive Analytics",
        description: "Forecast sales trends, customer behavior, and inventory needs with AI-powered predictions."
      },
      {
        icon: "people",
        title: "Customer Insights",
        description: "Understand your customers better with detailed purchasing patterns and preferences."
      },
      {
        icon: "speed",
        title: "Performance Metrics",
        description: "Track employee performance, peak hours, and operational efficiency in real-time."
      }
    ],
    [
      {
        icon: "sync",
        title: "Connect Everything",
        description: "Integrate with your existing business tools, accounting software, and e-commerce platforms."
      },
      {
        icon: "cloud_done",
        title: "Cloud-Powered",
        description: "Access your business data securely from anywhere, with automatic backups and updates."
      },
      {
        icon: "api",
        title: "Open API",
        description: "Extend functionality with our developer-friendly API and custom integrations."
      }
    ]
  ];

  useEffect(() => {
    if (sectionRef.current) {
      // Animate title
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

      // First row animations
      gsap.fromTo(
        imageRef1.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef1.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(
        contentRef1.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef1.current,
            start: "top 70%",
          }
        }
      );

      // Second row animations
      gsap.fromTo(
        contentRef2.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef2.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(
        imageRef2.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef2.current,
            start: "top 70%",
          }
        }
      );

      // Animate stat cards
      const statCards = sectionRef.current.querySelectorAll(".stat-card");
      statCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // Animate benefit items with stagger
      [0, 1].forEach(rowIndex => {
        benefitRefs.current[rowIndex].forEach((item, index) => {
          gsap.fromTo(
            item,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.1 * index,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              }
            }
          );
        });
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-gradient-to-r from-dark to-dark-light text-light">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Transforming <span className="accent-gradient">Business Operations</span>
          </h2>
          <p className="text-light-dark text-lg">
            See how NexusPOS revolutionizes your workflow and boosts your bottom line.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div ref={imageRef1} className="relative">
            <div className="rounded-3xl shadow-xl bg-gradient-to-br from-primary-light/40 to-secondary-light/40 p-1">
              <div className="rounded-3xl bg-dark-light h-[350px] w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary-light/40 flex items-center justify-center mb-4">
                    <span className="material-icons text-4xl text-primary">analytics</span>
                  </div>
                  <p className="text-light text-lg font-medium mb-2">AI-Powered Analytics Dashboard</p>
                  <p className="text-light-dark text-sm max-w-xs text-center">Real-time insights and predictive analytics</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg stat-card">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 bg-accent/10 rounded-full mr-4">
                  <span className="material-icons text-accent">trending_up</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark">+32%</h4>
                  <p className="text-sm text-dark opacity-70">Revenue increase</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={contentRef1}>
            <h3 className="text-2xl md:text-3xl font-bold font-space mb-6">
              Data-Driven <span className="accent-gradient">Insights</span>
            </h3>
            
            <div className="space-y-8">
              {benefitsData[0].map((benefit, index) => (
                <div 
                  key={index}
                  ref={el => benefitRefs.current[0][index] = el}
                  className="bg-dark-light/50 rounded-xl p-6 backdrop-blur"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 rounded-full p-2">
                      <span className="material-icons text-primary">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                      <p className="text-light-dark">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div className="order-2 md:order-1" ref={contentRef2}>
            <h3 className="text-2xl md:text-3xl font-bold font-space mb-6">
              Seamless <span className="accent-gradient">Integration</span>
            </h3>
            
            <div className="space-y-8">
              {benefitsData[1].map((benefit, index) => (
                <div 
                  key={index}
                  ref={el => benefitRefs.current[1][index] = el}
                  className="bg-dark-light/50 rounded-xl p-6 backdrop-blur"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 rounded-full p-2">
                      <span className="material-icons text-primary">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                      <p className="text-light-dark">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative" ref={imageRef2}>
            <div className="rounded-3xl shadow-xl bg-gradient-to-br from-secondary-light/40 to-accent-light/40 p-1">
              <div className="rounded-3xl bg-dark-light h-[350px] w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-secondary-light/40 flex items-center justify-center mb-4">
                    <span className="material-icons text-4xl text-secondary">lan</span>
                  </div>
                  <p className="text-light text-lg font-medium mb-2">Seamless Integration Ecosystem</p>
                  <p className="text-light-dark text-sm max-w-xs text-center">Connect with your favorite business tools</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg stat-card">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 bg-success/10 rounded-full mr-4">
                  <span className="material-icons text-success">check_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark">35+ Apps</h4>
                  <p className="text-sm text-dark opacity-70">Ready to integrate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
