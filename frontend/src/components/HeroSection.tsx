
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0 indian-pattern" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=3270&auto=format&fit=crop')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-solar-dark/80 to-solar-main/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl" data-aos="fade-up">
          <div className="animate-fade-right" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Powering India with <span className="text-solar-accent">Solar Energy</span>
            </h1>
          </div>
          
          <div className="animate-fade-right" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Professional solar installations for homes and businesses across India, reducing your energy bills and carbon footprint while increasing property value.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-right" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" onClick={scrollToContact} className="bg-solar-accent text-solar-dark hover:bg-solar-accent/90 text-lg px-8">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20 hover:text-white text-lg px-8" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
          
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-right" style={{ animationDelay: '0.8s' }}> */}
            {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-solar-accent text-3xl font-bold">500+</h3>
              <p className="text-sm">Installations Completed</p>
            </div> */}
            {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-solar-accent text-3xl font-bold">95%</h3>
              <p className="text-sm">Customer Satisfaction</p>
            </div> */}
            {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-solar-accent text-3xl font-bold">10+</h3>
              <p className="text-sm">Years Experience</p>
            </div> */}
            {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-solar-accent text-3xl font-bold">5+</h3>
              <p className="text-sm">Years Experienced Technicians</p>
            </div> */}
            {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-solar-accent text-3xl font-bold">30%</h3>
              <p className="text-sm">Average Energy Savings</p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
