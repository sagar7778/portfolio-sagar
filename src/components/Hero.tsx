import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-16 md:pt-20 pb-12 min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-violet-500">Sagar Koshti</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
              Frontend Developer specializing in React.js, Next.js, and Tailwind
              CSS
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
              I build intuitive, responsive, and high-performance web
              experiences with a focus on clean, maintainable code and modern
              development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white rounded-lg transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-violet-500 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sagar Koshti profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-3 md:p-4">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded font-medium text-sm md:text-base">
                  2+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">2+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-slate-300">Happy Clients</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-slate-300">Dev Technologies</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
