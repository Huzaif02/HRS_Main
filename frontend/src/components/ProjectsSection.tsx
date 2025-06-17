
import { useState } from 'react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Residential Bungalow",
      location: "Solapur",
      description: "6kW system installation for a large family home, reducing energy bills by 95%.",
      image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=3270&auto=format&fit=crop",
      category: "residential"
    },
    {
      title: "Residential Bungalow",
      location: "Solapur",
      description: "5kW rooftop installation powering a 3BHK Bungalow.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2758&auto=format&fit=crop",
      category: "residential"
    },
    // {
    //   title: "Textile Factory",
    //   location: "Industrial Area, Mumbai",
    //   description: "210kW system covering 30,000 sq ft of roof space, providing 60% of facility's energy needs.",
    //   image: "https://images.unsplash.com/photo-1627471080230-d3c243b9d1f9?q=80&w=3273&auto=format&fit=crop",
    //   category: "industrial"
    // },
    // {
    //   title: "Modern Villa",
    //   location: "Lonavala, Maharashtra",
    //   description: "15kW system with battery backup providing complete energy independence.",
    //   image: "https://images.unsplash.com/photo-1592833167665-45755a3c7640?q=80&w=3387&auto=format&fit=crop",
    //   category: "residential"
    // },
    // {
    //   title: "Shopping Mall",
    //   location: "MG Road, Bangalore",
    //   description: "175kW system integrated with parking canopies, providing shade and clean energy.",
    //   image: "https://images.unsplash.com/photo-1620240799562-1f191f55592f?q=80&w=3024&auto=format&fit=crop",
    //   category: "commercial"
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-dark mb-4">
            Our Featured Projects
          </h2>
          <div className="h-1 w-20 bg-solar-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Browse through our portfolio of successful installations across residential, 
            commercial, and industrial properties throughout India.
          </p>
        </div>
        
        {/* Project Filters */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-solar-main text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'residential' ? 'bg-solar-main text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('residential')}
          >
            Residential
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'commercial' ? 'bg-solar-main text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('commercial')}
          >
            Commercial
          </button>
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg h-80 animate-on-scroll"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block bg-solar-main text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-2">{project.location}</p>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="#" 
            className="inline-block border-b-2 border-solar-main text-solar-main font-medium hover:border-solar-accent hover:text-solar-accent transition-colors"
          >
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
