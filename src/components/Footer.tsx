import { Code} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Code className="h-6 w-6 text-violet-500" />
              <span>Sagar Koshti</span>
            </div>
            <p className="text-slate-400 mb-6">
              A passionate Frontend Developer specializing in creating
              beautiful, functional, and user-friendly websites and
              applications.
            </p>
          <div className="flex space-x-4">
      {/* GitHub */}
      <a
        href="https://github.com/sagar7778"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 p-2 rounded-full hover:bg-violet-600 transition-colors"
      >
        <FaGithub  />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sagar-koshti-1b6957219/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 p-2 rounded-full hover:bg-violet-600 transition-colors"
      >
        <FaLinkedin  />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919409307167"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
      >
        <FaWhatsapp  />
      </a>

      {/* Email */}
      <a
        href="mailto:sagarkoshti6531@gmail.com"
        className="bg-violet-800 p-2 rounded-full hover:bg-violet-600 transition-colors"
      >
        <FaEnvelope  />
      </a>
    </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "portfolio", "services", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-slate-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-slate-400 mb-2">
              Email:{" "}
              <a
                href="mailto:sagarkoshti6531@gmail.com"
                className="text-violet-600 hover:underline"
              >
                sagarkoshti6531@gmail.com
              </a>
            </p>

            <p className="text-slate-400 mb-2">
              Phone:{" "}
              <a
                href="tel:+919409307167"
                className="text-violet-600 hover:underline"
              >
                +91 9409307167
              </a>
            </p>

            <p className="text-slate-400">Location: India</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Sagar Koshti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
