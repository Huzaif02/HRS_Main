import team from '../images/team.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4 heading-underline">
              About HRS SOLAR
            </h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to make clean energy accessible to everyone, HRS SOLAR has been at the forefront 
              of the renewable energy revolution. Our journey began over a decade ago with a simple mission: to provide 
              high-quality solar solutions that are affordable, efficient, and tailored to each customer's unique needs.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be one of the leading solar installation companies, having completed over 500 
              installations across residential, commercial, and industrial sectors throughout India. Our team of certified professionals 
              is committed to excellence, innovation, and sustainability in everything we do.
            </p>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src={team}
                alt="Solar panel installation team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-solar-yellow p-6 rounded-lg shadow-lg transform rotate-3 animate-float">
              <p className="font-bold text-white text-lg">
                Experienced Professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
