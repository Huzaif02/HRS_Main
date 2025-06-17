
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    interest: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Inquiry submitted!",
          description: "We'll contact you within 1 business day.",
        });
        setFormSubmitted(true);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
      });
    }

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', address: '', message: '', interest: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white relative pt-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-solar-main/10 skew-y-2 -z-10"></div>
      <div className="hidden md:block absolute -top-16 right-10 w-32 h-32 bg-solar-accent/20 rounded-full animate-float"></div>
      <div className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-solar-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-solar-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Ready to start your solar journey? Reach out to our team for a free consultation and estimate.
            We're here to answer any questions you might have.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            {formSubmitted ? (
              <div className="bg-green-50 p-8 rounded-lg text-center border border-green-200">
                <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700 mb-4">Your inquiry has been submitted successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                    >
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                    placeholder="Complete address with PIN code"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-solar-main"
                    placeholder="Tell us about your energy needs or questions..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-solar-main hover:bg-solar-main/90 w-full py-6 text-lg"
                >
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
          
          <div className="animate-on-scroll space-y-6">
            <div className="h-[250px] md:h-[250px] rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                title="HRS SOLAR Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30417.413784110464!2d75.87699861509823!3d17.641787073575518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d1001e0dce5f%3A0xd7c15250b4b50ed4!2sROYAL%20BUILDERS%20AND%20DEVELOPERS%20nirmiti%20Ganesh%202%2C%20Rajaswa%20Nagar%2C%20Solapur%2C%20Maharashtra%20413004!5e0!3m2!1sen!2sin!4v1748796589398!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-solar-dark mb-4 border-b border-gray-200 pb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-solar-main/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-5 h-5 text-solar-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-solar-dark">Office Address</h4>
                      <p className="text-gray-600">Plot No.R14/4 Nirmiti Ganesh Nagar Part 2, Vijapur Road, Solapur - 413004</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-solar-main/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-5 h-5 text-solar-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-solar-dark">Phone</h4>
                      <p className="text-gray-600">+91 9209187770 <br/> +91 7666855722</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-solar-main/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-5 h-5 text-solar-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-solar-dark">Email</h4>
                      <p className="text-gray-600">hrs.solar@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-solar-main/10 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-5 h-5 text-solar-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-solar-dark">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
