import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Testimonial {
  content: string;
  name: string;
  position: string;
  image: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      content: "NexusPOS has completely transformed how we run our restaurant. The AI-powered inventory management alone has cut our food waste by 30%.",
      name: "Emma Rodriguez",
      position: "Owner, Fusion Bites",
      image: "person"
    },
    {
      content: "The checkout speed is incredible. Our lines move 3x faster now, and customers love the contactless payment options and digital receipts.",
      name: "James Wilson",
      position: "Manager, Urban Outfitters",
      image: "business"
    },
    {
      content: "The predictive analytics have been a game-changer for our inventory management. We've increased our profit margins by 22% in just three months.",
      name: "Sarah Chen",
      position: "Owner, Bloom Boutique",
      image: "woman"
    },
    {
      content: "The customer recognition feature has completely elevated our customer service. Regulars love being greeted by name with their preferences ready.",
      name: "Michael Thomas",
      position: "Manager, Cloudtop Cafe",
      image: "man"
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

      // Testimonial cards animation
      gsap.fromTo(
        carouselRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
          }
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      setActiveSlide(index);
      const carousel = carouselRef.current;
      const scrollWidth = carousel.scrollWidth;
      const slideCount = testimonials.length;
      const slideWidth = scrollWidth / slideCount;
      
      carousel.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-dark">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-dark opacity-70 text-lg">
            Businesses across industries are transforming their operations with NexusPOS.
          </p>
        </div>
        
        <div className="testimonial-carousel relative">
          <div 
            ref={carouselRef} 
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] snap-start bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition"
              >
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-icons">star</span>
                  ))}
                </div>
                <p className="text-dark mb-6 text-lg">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary-light flex items-center justify-center">
                    <span className="material-icons text-primary">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-dark opacity-70">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`navigation-dot ${activeSlide === index ? 'active' : ''}`} 
                onClick={() => scrollToSlide(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
