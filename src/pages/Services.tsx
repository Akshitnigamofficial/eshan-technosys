import { motion } from "motion/react";
import { Code, Globe, Cpu, Shield, Zap, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Tailored enterprise applications built with cutting-edge technologies to meet your unique business requirements and drive digital transformation."
    },
    {
      icon: <Globe size={32} />,
      title: "Cloud Infrastructure & Hosting",
      description: "Scalable, secure cloud architectures and high-performance server hosting. We manage your infrastructure so you can focus on your business."
    },
    {
      icon: <Cpu size={32} />,
      title: "System Integration",
      description: "Seamlessly connect your disparate systems and applications. We ensure smooth data flow and interoperability across your tech ecosystem."
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive security audits, threat detection, and robust defense mechanisms."
    },
    {
      icon: <Zap size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that provide seamless user experiences across iOS and Android devices."
    },
    {
      icon: <Users size={32} />,
      title: "IT Consulting & Strategy",
      description: "Strategic technology guidance to help you make informed decisions. Our experts provide insights that align IT with your business goals."
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Modern, responsive, and high-performance websites and web applications built using the latest frameworks and best practices."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences."
    },
    {
      icon: <Globe size={32} />,
      title: "DevOps & Automation",
      description: "Streamline your development lifecycle with automated CI/CD pipelines, containerization, and infrastructure as code."
    },
    {
      icon: <Shield size={32} />,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Comprehensive technology solutions designed to power your enterprise and drive innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover p-10 rounded-glass flex flex-col gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{service.description}</p>
                <ul className="space-y-3 mt-4">
                  {["Enterprise Grade", "Scalable Architecture", "24/7 Support"].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
