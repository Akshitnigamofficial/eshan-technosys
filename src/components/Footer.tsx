import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold flex items-center gap-2 mb-6">
              <span className="text-white">Eshanom</span>
              <span className="text-brand-primary">Technosys</span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8">
              Leading enterprise software development and infrastructure solutions provider, empowering businesses worldwide with cutting-edge technology.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-500 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Software Dev", "Cloud Solutions", "System Integration", "IT Consulting"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-500 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-brand-primary" />
                info@eshanomtechnosys.com
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-brand-primary" />
                +91 1234567890
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} className="text-brand-primary" />
                E-7 Arera Colony Bhopal MadhyaPradesh 462026
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} EshanomTechnosys. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
