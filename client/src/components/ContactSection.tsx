import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

type InterestOption = "demo" | "pricing" | "technical" | "custom";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState<InterestOption | null>(null);

  // Contact info data
  const contactInfoItems: ContactInfo[] = [
    {
      icon: "email",
      title: "Email Us",
      content: "info@nexuspos.tech"
    },
    {
      icon: "call",
      title: "Call Us",
      content: "+1 (800) 555-9876"
    },
    {
      icon: "location_on",
      title: "Visit Us",
      content: "101 Innovation Drive, San Francisco, CA 94103"
    }
  ];

  // Interest options
  const interestOptions: {value: InterestOption; label: string}[] = [
    { value: "demo", label: "Getting a demo" },
    { value: "pricing", label: "Pricing information" },
    { value: "technical", label: "Technical questions" },
    { value: "custom", label: "Custom solution" }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      // Animate left content
      gsap.fromTo(
        leftContentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 75%",
          }
        }
      );

      // Animate right content (form)
      gsap.fromTo(
        rightContentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would typically send this data to an API
    console.log({ name, email, company, interest });
    
    // Reset form
    setName("");
    setEmail("");
    setCompany("");
    setInterest(null);
    
    // Show a notification that the form was submitted (could use the toast component)
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-dark text-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={leftContentRef}>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
              Get in <span className="accent-gradient">Touch</span>
            </h2>
            <p className="text-light-dark text-lg mb-8">
              Have questions or ready to get started? Fill out the form and our team will contact you within 24 hours.
            </p>
            
            <div className="space-y-6">
              {contactInfoItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-2">
                    <span className="material-icons text-accent">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-light-dark">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={rightContentRef}>
            <form onSubmit={handleSubmit} className="bg-dark-light rounded-2xl p-8">
              <div className="form-field">
                <input 
                  type="text" 
                  id="name" 
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="form-field">
                <input 
                  type="email" 
                  id="email" 
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="form-field">
                <input 
                  type="text" 
                  id="company" 
                  placeholder=" "
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <label htmlFor="company">Company Name</label>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 text-light-dark text-sm">I'm interested in:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center bg-dark-dark rounded-lg p-3 cursor-pointer hover:bg-primary/10 transition"
                    >
                      <input 
                        type="radio" 
                        name="interest" 
                        className="mr-3"
                        checked={interest === option.value}
                        onChange={() => setInterest(option.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-dark text-dark font-bold py-4 px-8 rounded-full transition btn-hover-effect mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
