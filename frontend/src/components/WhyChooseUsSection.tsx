
import { Check, Settings, DollarSign, Wrench } from "lucide-react";
import qualityGif from '../images/quality-assurance.gif';
import customGif from '../images/custom-solution.gif';
import costGif from '../images/cost-effective.gif';
import expertGif from '../images/expert-installation.gif';

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            Why Choose Us
          </h2>
          <div className="h-1 w-20 bg-solar-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            We provide excellent service, quality products, and custom solutions to meet your energy needs.
            Our team of experts ensures that every installation is cost-effective and expertly done.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform animate-on-scroll">
            <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img src={qualityGif} alt="Quality Assurance" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-solar-dark mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We use only the highest quality solar panels and equipment, backed by industry-leading warranties.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform animate-on-scroll">
            <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img src={customGif} alt="Quality Assurance" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-solar-dark mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              We design tailored solar systems to match your specific energy needs and property characteristics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform animate-on-scroll">
            <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img src={costGif} alt="Quality Assurance" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-solar-dark mb-2">Cost Effective</h3>
            <p className="text-gray-600">
              We help you maximize ROI with competitive pricing and assistance with available tax credits and incentives.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform animate-on-scroll">
            <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img src={expertGif} alt="Quality Assurance" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-solar-dark mb-2">Expert Installation</h3>
            <p className="text-gray-600">
              Our skilled technicians ensure proper, safe installation with minimal disruption to your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
