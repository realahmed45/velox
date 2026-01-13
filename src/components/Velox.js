import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Zap,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
  Code,
  Shield,
  Database,
  Menu,
  X,
} from "lucide-react";

export default function VeloxResponsive() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const whatsappLink =
    "https://wa.me/923329945014?text=Hey%20VELOX%2C%20I%27m%20interested%20in%20a%20professional%20website.%20Can%20you%20help%20me%3F";
  const portfolioLink =
    "https://wa.me/923329945014?text=Hey%20VELOX%2C%20I%27d%20like%20to%20see%20your%20portfolio%20of%20websites.%20What%20have%20you%20built%3F";

  return (
    <div className="bg-black overflow-hidden">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          overflow-x: hidden;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-30px) rotateZ(2deg); }
          50% { transform: translateY(0px) rotateZ(0deg); }
          75% { transform: translateY(-20px) rotateZ(-2deg); }
        }

        @keyframes orbitSmall {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }

        @keyframes orbitMedium {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes orbitLarge {
          0% { transform: rotate(0deg) translateX(160px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
        }

        @keyframes shimmerText {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes slideInWord {
          0% { 
            opacity: 0;
            transform: translateY(40px) translateX(-20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes breatheScale {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes bounceIn {
          0% { 
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.2);
          }
          50% {
            box-shadow: 0 0 80px rgba(251, 191, 36, 0.5);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInDown { animation: slideInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-orbitSmall { animation: orbitSmall 12s linear infinite; }
        .animate-orbitMedium { animation: orbitMedium 15s linear infinite; }
        .animate-orbitLarge { animation: orbitLarge 20s linear infinite; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-bounceIn { animation: bounceIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-glowPulse { animation: glowPulse 3s ease-in-out infinite; }

        .text-shimmer {
          background: linear-gradient(90deg, #fff 0%, #fdba74 25%, #fff 50%, #fdba74 75%, #fff 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s infinite;
        }

        .feature-card {
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          border-color: rgba(251, 191, 36, 0.8);
          box-shadow: 0 40px 80px rgba(251, 191, 36, 0.15);
        }

        .pricing-card {
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-20px) scale(1.02);
          box-shadow: 0 80px 120px rgba(251, 191, 36, 0.2);
        }

        .glass-effect {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .word-slide {
          display: inline-block;
          animation: slideInWord 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        a, button {
          position: relative;
          overflow: hidden;
        }

        a::before, button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        a:hover::before, button:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .animate-slideInDown,
          .animate-fadeInUp {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .feature-card:hover,
          .pricing-card:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-orange-500/20">
        <div className="w-full px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter">
            <img src="/logo.png" alt="Velox Logo" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
              VELOX
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/projects"
              className="group px-6 sm:px-8 py-2 sm:py-3 border border-orange-400/50 text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-orange-500/20 transition-all duration-500 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/40 relative overflow-hidden flex items-center gap-2 rounded-sm"
            >
              <span className="relative z-10">Projects</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group px-6 sm:px-8 py-2 sm:py-3 border border-orange-400/50 text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-orange-500/20 transition-all duration-500 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/40 relative overflow-hidden flex items-center gap-2 rounded-sm"
            >
              <span className="relative z-10">Pricing</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-4 py-2 bg-orange-500 text-white font-black text-sm rounded-sm"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white pt-20 sm:pt-32 px-4 sm:px-6 md:px-12 overflow-hidden flex items-center w-full">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px]">
            <div className="animate-orbitSmall absolute w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-sm" />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px]">
            <div className="animate-orbitMedium absolute w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-orange-400/60 to-orange-500/30 rounded-sm blur-sm" />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[1000px] h-[500px] sm:h-[1000px]">
            <div className="animate-orbitLarge absolute w-3 sm:w-4 h-3 sm:h-4 bg-orange-400/40 rounded-sm blur-md" />
          </div>

          <div
            className="absolute w-[600px] sm:w-[1200px] h-[600px] sm:h-[1200px] bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl opacity-40"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float 20s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-[450px] sm:w-[900px] h-[450px] sm:h-[900px] bg-gradient-to-tl from-orange-500/15 to-transparent rounded-full blur-3xl opacity-30"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float 25s ease-in-out infinite reverse",
            }}
          />

          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/60 rounded-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  8 + Math.random() * 12
                }s ease-in-out infinite`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div
            className="inline-block mb-6 sm:mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="px-4 sm:px-6 py-2 sm:py-3 border border-orange-500/40 glass-effect hover:border-orange-400/80 transition-all duration-500 cursor-pointer group animate-glowPulse rounded-sm">
              <span className="text-orange-300 text-xs font-black tracking-widest uppercase flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-sm animate-breatheScale" />
                72-Hour Delivery
              </span>
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-tight sm:leading-tight md:leading-none mb-6 sm:mb-8 tracking-tighter">
              <div className="overflow-hidden pb-2 sm:pb-4">
                <span
                  className="word-slide text-white block"
                  style={{ animationDelay: "0.3s" }}
                >
                  Crafted For
                </span>
              </div>
              <div className="overflow-hidden pb-2 sm:pb-4">
                <span
                  className="word-slide text-shimmer block text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
                  style={{ animationDelay: "0.5s" }}
                >
                  Businesses That
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className="word-slide text-orange-400 block text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
                  style={{ animationDelay: "0.7s" }}
                >
                  Dominate
                </span>
              </div>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-semibold mb-8 sm:mb-12"
              style={{
                animation:
                  "fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.9s both",
              }}
            >
              Enterprise-grade websites in 72 hours.{" "}
              <span className="text-orange-300 font-black">Zero shortcuts.</span>
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-12 sm:mb-24 animate-fadeInUp"
            style={{ animationDelay: "1.1s" }}
          >
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black font-black text-sm sm:text-lg uppercase tracking-widest transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/60 flex items-center justify-center sm:justify-start gap-2 sm:gap-4 hover:scale-105 rounded-sm"
            >
              <span>See Pricing</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-3 transition-transform duration-300 hidden sm:block"
              />
            </button>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-6 border-2 border-orange-400/50 hover:border-orange-400 text-white font-black uppercase tracking-widest transition-all duration-500 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/30 group inline-block text-center rounded-sm"
            >
              View All Projects
            </Link>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 sm:pt-16 border-t border-orange-500/20"
            style={{
              animation: "fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 1.3s both",
            }}
          >
            {[
              { num: "500+", label: "Websites" },
              { num: "45+", label: "Countries" },
              { num: "99.99%", label: "Uptime" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center sm:text-left group cursor-pointer relative"
                style={{ animationDelay: `${1.5 + i * 0.15}s` }}
              >
                <div className="relative pb-2 sm:pb-4 mb-2">
                  <div className="text-3xl sm:text-5xl font-black text-orange-400 group-hover:text-orange-300 group-hover:scale-110 transition-all duration-300">
                    {stat.num}
                  </div>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-semibold group-hover:text-orange-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 sm:py-24 md:py-48 px-4 sm:px-6 md:px-12 relative w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 md:mb-32">
            <h2 className="text-3xl sm:text-5xl md:text-9xl lg:text-10xl font-black text-gray-900 tracking-tight animate-fadeInUp">
              The Process
            </h2>
            <p
              className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-2xl font-semibold mt-4 sm:mt-8 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Three days. Obsessive detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                step: "01",
                title: "Strategy & Design",
                time: "Day 1",
                details: [
                  "Brand analysis",
                  "Design system",
                  "Prototypes",
                  "Revisions",
                ],
              },
              {
                step: "02",
                title: "Development",
                time: "Day 2",
                details: [
                  "Frontend build",
                  "Backend setup",
                  "API integration",
                  "Performance",
                ],
              },
              {
                step: "03",
                title: "Testing & Launch",
                time: "Day 3",
                details: [
                  "Testing",
                  "Security audit",
                  "SEO check",
                  "Live deploy",
                ],
              },
            ].map((process, i) => (
              <div
                key={i}
                className="feature-card p-6 sm:p-8 md:p-12 border border-gray-300 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                <div className="mb-8 sm:mb-12 relative">
                  <div className="text-5xl sm:text-7xl md:text-8xl font-black text-gray-200 mb-2 sm:mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 sm:mb-4">
                    {process.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-amber-600 rounded-full" />
                    <p className="text-amber-700 font-black uppercase tracking-widest text-xs sm:text-sm">
                      {process.time}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-5">
                  {process.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex gap-3 sm:gap-4 items-start group/item cursor-pointer"
                    >
                      <Check
                        size={20}
                        className="text-amber-600 flex-shrink-0 mt-1 group-hover/item:scale-125 group-hover/item:text-amber-500 transition-all duration-300"
                      />
                      <span className="text-gray-700 font-semibold group-hover/item:text-gray-900 group-hover/item:translate-x-2 transition-all duration-300 text-sm sm:text-base">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-12 sm:py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-amber-900/40 relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-gradient-to-br from-amber-600 to-transparent rounded-full blur-3xl"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float 30s ease-in-out infinite",
            }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-9xl lg:text-10xl font-black mb-4 sm:mb-6 tracking-tight animate-fadeInUp">
            Built For <span className="text-amber-500">Excellence</span>
          </h2>
          <p
            className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-12 sm:mb-20 md:mb-32 max-w-2xl font-semibold animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Every feature architected to perfection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Smartphone,
                title: "Responsive",
                desc: "All devices",
                features: ["Mobile first", "Fluid design", "Touch optimized"],
              },
              {
                icon: Zap,
                title: "Performance",
                desc: "Lightning fast",
                features: ["Lighthouse 98+", "Global CDN", "Smart cache"],
              },
              {
                icon: Globe,
                title: "SEO Ready",
                desc: "Rank from day one",
                features: ["Technical SEO", "Schema markup", "Meta tags"],
              },
              {
                icon: Shield,
                title: "Security",
                desc: "Bank-grade",
                features: ["SSL/TLS", "GDPR ready", "DDoS protection"],
              },
              {
                icon: Database,
                title: "Backend",
                desc: "Scalable",
                features: ["Custom DB", "API-first", "Real-time sync"],
              },
              {
                icon: Code,
                title: "Code",
                desc: "Future-proof",
                features: ["Modern frameworks", "Clean code", "CI/CD ready"],
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="feature-card p-6 sm:p-8 md:p-10 border border-amber-900/40 bg-gradient-to-br from-gray-950 to-black group"
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  <Icon
                    className="text-amber-500 mb-4 sm:mb-8 group-hover:text-amber-400 group-hover:scale-150 group-hover:-rotate-12 transition-all duration-500"
                    size={36}
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 sm:mb-8 font-semibold text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>

                  <ul className="space-y-2 sm:space-y-4">
                    {feature.features.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm font-medium group-hover:text-gray-200 transition-all duration-300 group-hover:translate-x-2"
                      >
                        <span className="text-amber-600 font-black flex-shrink-0">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-12 sm:py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-gray-200 relative w-full">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-9xl lg:text-10xl font-black text-gray-900 tracking-tight animate-fadeInUp">
            Pricing
          </h2>
          <p
            className="text-sm sm:text-lg md:text-2xl text-gray-700 mb-12 sm:mb-20 md:mb-32 max-w-2xl font-semibold animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Three tiers. Exceptional value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Starter",
                price: "$300",
                desc: "For new ventures",
                popular: false,
                features: [
                  { text: "Up to 5 pages", included: true },
                  { text: "Responsive design", included: true },
                  { text: "SEO optimization", included: true },
                  { text: "Contact form", included: true },
                  { text: "SSL certificate", included: true },
                ],
              },
              {
                name: "Professional",
                price: "$600",
                desc: "Complete solution",
                popular: true,
                features: [
                  { text: "Unlimited pages", included: true },
                  { text: "Responsive design", included: true },
                  { text: "Advanced SEO", included: true },
                  { text: "CMS integration", included: true },
                  { text: "API integration", included: true },
                  { text: "Priority support", included: true },
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Unlimited",
                popular: false,
                features: [
                  { text: "Everything in Pro", included: true },
                  { text: "Custom development", included: true },
                  { text: "Dedicated support", included: true },
                  { text: "Advanced integrations", included: true },
                  { text: "24/7 support", included: true },
                  { text: "Custom infrastructure", included: true },
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`pricing-card p-6 sm:p-10 md:p-12 transition-all duration-800 group ${
                  plan.popular
                    ? "border-2 border-amber-600 bg-gradient-to-br from-gray-50 to-white shadow-2xl shadow-amber-600/25 md:scale-105"
                    : "border border-gray-300 bg-white"
                }`}
                style={{ animationDelay: `${0.4 + i * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="mb-6 sm:mb-8 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-black uppercase text-xs tracking-widest animate-bounceIn">
                    Popular
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-10">
                  {plan.desc}
                </p>

                <div className="mb-8 sm:mb-12 relative">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {plan.price}
                  </span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 sm:py-6 font-black uppercase tracking-widest transition-all duration-500 mb-8 sm:mb-12 group/btn text-center text-sm sm:text-base ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 hover:shadow-xl hover:shadow-amber-600/50 hover:scale-105"
                      : "border-2 border-gray-300 text-gray-900 hover:border-amber-600 hover:bg-amber-50 hover:text-amber-700"
                  }`}
                >
                  {plan.popular ? "Get Started" : "Learn More"}
                </a>

                <div className="space-y-4 sm:space-y-6">
                  {plan.features.map((feature, j) => (
                    <div
                      key={j}
                      className={`flex gap-2 sm:gap-4 items-center transition-all duration-300 group/feature text-xs sm:text-sm ${
                        feature.included ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      <span
                        className={`font-black text-xl flex-shrink-0 ${
                          feature.included ? "text-amber-600" : "text-gray-300"
                        }`}
                      >
                        {feature.included ? "✓" : "−"}
                      </span>
                      <span className="font-semibold group-hover/feature:text-amber-600 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-12 sm:py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t-2 border-amber-600 relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute w-[600px] sm:w-[1200px] h-[600px] sm:h-[1200px] bg-gradient-to-br from-amber-600 to-transparent rounded-full blur-3xl"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float 35s ease-in-out infinite",
            }}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-9xl lg:text-10xl font-black mb-6 sm:mb-12 tracking-tight animate-fadeInUp">
            Ready?
          </h2>
          <p
            className="text-sm sm:text-lg md:text-2xl text-gray-200 mb-10 sm:mb-20 font-semibold animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Join 500+ businesses transformed in 72 hours.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-16 py-4 sm:py-8 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-black font-black text-sm sm:text-lg uppercase tracking-widest transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/60 hover:scale-110 group animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Launch Your Site
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-600 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 border-t border-amber-900/30 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 text-2xl sm:text-3xl font-black">
              <img src="/logo.png" alt="Velox Logo" className="h-8 sm:h-10 w-auto object-contain" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                VELOX
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold">
              © 2025. Websites built different.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
