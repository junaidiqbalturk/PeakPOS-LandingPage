import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initScrollAnimations = () => {
  // Slide up animations
  gsap.utils.toArray<HTMLElement>('.slide-up').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        }
      }
    );
  });
  
  // Slide in from left animations
  gsap.utils.toArray<HTMLElement>('.slide-in-left').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        }
      }
    );
  });
  
  // Slide in from right animations
  gsap.utils.toArray<HTMLElement>('.slide-in-right').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        }
      }
    );
  });
  
  // Fade in animations
  gsap.utils.toArray<HTMLElement>('.fade-in').forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        }
      }
    );
  });
};

export const clearScrollTriggers = () => {
  // Clean up all ScrollTrigger instances when component unmounts
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const animateHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;

  const updateHeaderStyle = () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white', 'backdrop-blur', 'shadow-lg', 'py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.remove('bg-white', 'backdrop-blur', 'shadow-lg', 'py-2');
      header.classList.add('py-4');
    }
  };

  window.addEventListener('scroll', updateHeaderStyle);
  updateHeaderStyle(); // Initial call
  
  return () => {
    window.removeEventListener('scroll', updateHeaderStyle);
  };
};
