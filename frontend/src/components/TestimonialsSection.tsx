
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Homeowner, Solapur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "HRS SOLAR made switching to solar so easy. Their team was professional and knowledgeable throughout the process. We're now saving over ₹15,000 per month on our electricity bills!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Business Owner, Solapur",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Installing solar panels through HRS SOLAR was one of the best business decisions I've made. The system paid for itself faster than expected, and their customer service has been exceptional.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      role: "Homeowner, Pune",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      quote: "The team at HRS SOLAR designed a custom solution that perfectly matched our home's energy needs. The installation was quick and clean, and we're thrilled with the results.",
      rating: 4
    },
    {
      name: "Sunita Reddy",
      role: "Property Manager, Mumbai",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "Managing multiple properties means finding cost-effective solutions is crucial. HRS SOLAR helped us implement solar across our properties, resulting in significant savings and happier tenants.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 indian-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-solar-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers from across India have to say about 
            their experience with HRS SOLAR.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:block overflow-hidden relative animate-on-scroll">
            <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-solar-accent">
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-solar-main">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-solar-dark">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-solar-accent' : 'text-gray-300'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-600 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-solar-dark hover:bg-gray-100 transition-colors"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-solar-dark hover:bg-gray-100 transition-colors"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots for navigation */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? 'bg-solar-accent' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Testimonials */}
          <div className="md:hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md mb-6 animate-on-scroll border-l-4 border-solar-accent"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-3 border-2 border-solar-main">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-solar-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-solar-accent' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic text-sm">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
