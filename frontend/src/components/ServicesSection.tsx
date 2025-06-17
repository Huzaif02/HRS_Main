
import { Button } from "@/components/ui/button";
import { useState } from "react";
import residential from '../images/residential.jpg'
import commercial from '../images/commercial.jpg'
import maintenance from '../images/maintenance.jpg'

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('residential');
  
  const services = [
    {
      id: 'residential',
      title: "Residential Solar Installations",
      description: "Custom designed solar systems for homes of all sizes, helping families reduce electricity bills while increasing property value.",
      image: residential,
      features: [
        "Roof-mounted and ground-mounted options",
        "Custom system designs for optimal efficiency",
        "Sleek, modern panel aesthetics",
        "Net metering setup assistance",
        "Government subsidy application support"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'commercial',
      title: "Commercial Solar Solutions",
      description: "Energy solutions for businesses of all sizes, from office buildings to large industrial facilities, helping reduce operating costs and carbon footprint.",
      image: commercial,
      features: [
        "Large-scale rooftop installations",
        "Carport and parking canopy solutions",
        "Power purchase agreements (PPAs)",
        "Return on investment calculations",
        "Accelerated depreciation benefits"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'maintenance',
      title: "Solar Panel Maintenance",
      description: "Regular maintenance and cleaning services to ensure your solar system operates at peak efficiency year after year, maximizing your energy production.",
      image: maintenance,
      features: [
        "Quarterly/bi-annual cleaning services",
        "Performance monitoring and analysis",
        "Preventative maintenance packages",
        "Repair and replacement services",
        "Efficiency optimization"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id="services" className="section-padding bg-gray-50 indian-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            Our Solar Services
          </h2>
          <div className="h-1 w-20 bg-solar-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            From initial consultation to installation and maintenance, we provide comprehensive solar solutions 
            tailored to your specific energy needs and property characteristics across India.
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map(service => (
            <button
              key={service.id}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === service.id 
                  ? 'bg-solar-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Active Service Display */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-16 animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:order-2 h-64 lg:h-auto">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-solar-main/10 flex items-center justify-center mr-4 text-solar-main">
                  {activeService.icon}
                </div>
                <h3 className="text-2xl font-bold text-solar-dark">{activeService.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{activeService.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-solar-dark mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {activeService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-solar-accent mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-solar-main hover:bg-solar-main/90"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-solar-main to-solar-main/80 text-white p-8 md:p-12 rounded-xl animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Save on Your Energy Bills?
              </h3>
              <p className="text-blue-50 mb-6 lg:mb-0">
                Get a free consultation and find out how much you could save by switching to solar power.
                Our experts will provide a customized solution that fits your needs and budget.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Button 
                size="lg" 
                className="bg-white text-solar-main hover:bg-gray-100 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
