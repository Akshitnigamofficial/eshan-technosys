import { motion } from "motion/react";
import { Shield, Users, Zap, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-glass overflow-hidden glass p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team working" 
                  className="rounded-[1.25rem] w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 blur-3xl rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 blur-3xl rounded-full -z-10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Eshan Om Technosys</h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are a premier technology company specializing in enterprise software development and infrastructure solutions. With over 15 years of experience, we've helped corporations and government agencies transform their operations through innovative technology solutions.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Our team of expert engineers and consultants brings deep domain expertise across industries including finance, healthcare, government, and manufacturing. We pride ourselves on delivering robust, scalable solutions that drive real business value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Shield size={20} />, title: "Enterprise Security", desc: "Bank-level security standards" },
                  { icon: <Users size={20} />, title: "Expert Team", desc: "200+ certified professionals" },
                  { icon: <Zap size={20} />, title: "Rapid Deployment", desc: "Agile delivery methodology" },
                  { icon: <Globe size={20} />, title: "Proven Track Record", desc: "500+ successful projects" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-brand-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower organizations with transformative technology solutions that solve complex challenges, drive sustainable growth, and create lasting impact in the digital era.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Constantly pushing boundaries to find better ways to solve problems." },
              { title: "Integrity", desc: "Building trust through transparency, honesty, and accountability." },
              { title: "Excellence", desc: "Delivering superior quality in every line of code and every consultation." }
            ].map((value, i) => (
              <div key={i} className="glass p-8 rounded-glass text-center">
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
