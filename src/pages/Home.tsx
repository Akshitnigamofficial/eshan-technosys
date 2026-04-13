import { motion } from "motion/react";
import { Zap, Globe, Code, Users, ChevronRight, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-brand-primary"
          >
            <Zap size={16} />
            <span>ENTERPRISE SOFTWARE EXCELLENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
          >
            Building Tomorrow's <br />
            <span className="text-gradient">Digital Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We deliver cutting-edge enterprise software solutions and robust infrastructure systems for corporate and government clients worldwide. Transform your business with technology that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold hover:shadow-lg hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 group">
              Get Started
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-all text-center">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-primary/10 blur-3xl rounded-full -z-10" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full -z-10" 
      />
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "500+", icon: <Zap size={24} /> },
    { label: "Countries Served", value: "25+", icon: <Globe size={24} /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users size={24} /> },
    { label: "Years in Business", value: "15+", icon: <Code size={24} /> },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="glass rounded-glass p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center gap-4">
              <div className="text-brand-primary/50">{stat.icon}</div>
              <div className="text-4xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    "Financial Services", "Healthcare", "Government", "Manufacturing",
    "Telecommunications", "Energy & Utilities", "Retail & E-commerce", "Education"
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="glass rounded-glass p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Our expertise spans across multiple sectors, delivering tailored solutions for diverse industry challenges</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass py-4 px-6 rounded-xl text-slate-300 font-medium hover:text-white hover:bg-white/10 transition-all cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const featuredServices = [
    {
      icon: <Code size={32} />,
      title: "Custom Software",
      description: "Tailored enterprise applications built with cutting-edge technologies."
    },
    {
      icon: <Globe size={32} />,
      title: "Cloud & Hosting",
      description: "Scalable, secure cloud architectures and high-performance server hosting."
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions."
    },
    {
      icon: <Zap size={32} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for seamless experiences."
    }
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We offer comprehensive IT solutions across all sectors. Here are some of our core specialties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-8 rounded-glass flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-4">{service.description}</p>
              <Link to="/services" className="text-brand-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                Learn More <ChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-all group"
          >
            Explore All Services
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ClientMarquee = () => {
  const clients = [
    { name: "TECHCORP", icon: <Cpu size={24} /> },
    { name: "GLOBAL SYSTEMS", icon: <Globe size={24} /> },
    { name: "NEXUS IT", icon: <Zap size={24} /> },
    { name: "CLOUDWARE", icon: <Shield size={24} /> },
    { name: "DATASTREAM", icon: <Code size={24} /> },
    { name: "INNOVATE", icon: <Users size={24} /> },
    { name: "SECURENET", icon: <Shield size={24} /> },
    { name: "ELITE SOFT", icon: <Zap size={24} /> }
  ];

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">Trusted by Industry Leaders</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {clients.concat(clients).map((client, i) => (
            <div key={i} className="flex items-center gap-4 text-white/10 hover:text-brand-primary/30 transition-colors cursor-default">
              {client.icon}
              <span className="text-4xl md:text-6xl font-display font-black">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Services />
      <Stats />
      <Industries />
    </>
  );
}
