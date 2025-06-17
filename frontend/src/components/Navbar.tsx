
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import logo from '../images/logo.png'; // adjust path if needed

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#" className="flex items-center gap-2">
        <div className="flex items-center">
          <img src={logo} alt="HRS Solar Logo" className="h-10 w-10 object-contain" />
          <h1 className={`font-bold text-xl md:text-2xl ml-2 ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            HRS SOLAR
          </h1>
        </div>
      </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={`font-medium hover:text-solar-blue transition-colors ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            About
          </a>
          <a href="#services" className={`font-medium hover:text-solar-blue transition-colors ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            Services
          </a>
          <a href="#projects" className={`font-medium hover:text-solar-blue transition-colors ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            Projects
          </a>
          <a href="#testimonials" className={`font-medium hover:text-solar-blue transition-colors ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            Testimonials
          </a>
          <a href="#contact" className={`font-medium hover:text-solar-blue transition-colors ${scrolled ? 'text-solar-dark' : 'text-white'}`}>
            Contact
          </a>
          <Button 
            variant="default" 
            className={`bg-solar-blue text-white hover:bg-solar-blue/90 ${scrolled ? 'border border-black text-black' : 'border border-white'}`}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            className={`w-6 h-6 ${scrolled ? 'text-solar-dark' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="font-medium text-solar-dark hover:text-solar-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="font-medium text-solar-dark hover:text-solar-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="font-medium text-solar-dark hover:text-solar-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-solar-dark hover:text-solar-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="font-medium text-solar-dark hover:text-solar-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-solar-blue text-white hover:bg-solar-blue/90 w-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
