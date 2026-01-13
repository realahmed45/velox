import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Check, ArrowRight } from "lucide-react";
import { projectsData, categories } from "../data/projectsData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (componentPath) => {
    navigate(componentPath);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .project-card {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-16px);
        }

        .badge-tech {
          transition: all 0.3s ease;
        }

        .badge-tech:hover {
          transform: scale(1.15);
        }

        .gradient-shine {
          position: relative;
          overflow: hidden;
        }

        .gradient-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .gradient-shine:hover::after {
          transform: translateX(100%);
        }
      `}</style>

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-800 hover:text-orange-500 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-bold uppercase tracking-wider text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 text-3xl font-black tracking-tighter">
            <img src="/logo.png" alt="Velox Logo" className="h-10 w-auto object-contain" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
              VELOX
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-orange-50 border border-orange-200 rounded-sm">
              <span className="text-orange-600 font-black text-sm uppercase tracking-wider">Portfolio Showcase</span>
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-gray-900"
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Delivered</span> Projects
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 mb-4 font-medium max-w-3xl mx-auto"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              Production-ready websites delivered in just 72 hours. Click any project to see it live.
            </p>
            <p
              className="text-md text-orange-500 font-bold flex items-center justify-center gap-2"
              style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
            >
              ✨ ...and many more! Contact us to see our full portfolio
            </p>
          </div>

          {/* Category Filters */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-16"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-xl shadow-orange-400/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200 hover:border-orange-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.componentPath)}
                className="project-card bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 gradient-shine"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Project Header with Image */}
                <div className="h-64 relative overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-black text-white mb-3 drop-shadow-xl tracking-tight">
                      {project.name}
                    </h3>
                    <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-black uppercase tracking-widest rounded-sm shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {hoveredCard === project.id && (
                    <div className="absolute top-5 right-5 bg-white text-black rounded-sm p-3 shadow-lg animate-in fade-in zoom-in duration-300">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-gray-900 font-black text-xs uppercase tracking-wider mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="badge-tech px-3 py-1.5 bg-gray-100 text-gray-800 text-xs font-bold rounded-sm border border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-gray-900 font-black text-xs uppercase tracking-wider mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2.5">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <Check size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="border-t border-gray-200 pt-5 mb-5">
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-sm p-3 border border-orange-200">
                          <p className="text-orange-600 font-black text-xl">
                            {metric.split(' ')[0]}
                          </p>
                          <p className="text-gray-600 text-xs uppercase font-semibold">
                            {metric.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Click to View Button */}
                  <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white py-4 font-black uppercase text-sm tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <span>View Live Demo</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-sm p-16 border-2 border-orange-200">
            <h2
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Join 500+ businesses transformed in 72 hours
            </p>
            <Link
              to="/"
              className="inline-block px-12 py-5 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black text-lg uppercase tracking-widest transition-all duration-300 shadow-2xl hover:shadow-orange-400/50 hover:scale-105 rounded-sm"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-3xl font-black">
            <img src="/logo.png" alt="Velox Logo" className="h-10 w-auto object-contain" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              VELOX
            </span>
          </div>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
            © 2025. Websites built different.
          </p>
        </div>
      </footer>
    </div>
  );
}
