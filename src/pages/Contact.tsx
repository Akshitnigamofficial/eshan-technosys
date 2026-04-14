import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
              Ready to start your next project? Contact us today for a free consultation.
            </motion.p>
          </div>

          <div className="glass rounded-glass p-8 md:p-16 flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <p className="text-slate-400 mb-12 text-lg">Our team is here to help you navigate your digital transformation journey. Reach out through any of these channels.</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                    <div className="text-white text-lg font-medium">info@eshanomtechnosys.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">Call Us</div>
                    <div className="text-white text-lg font-medium">+91 9589533175</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">Visit Us</div>
                    <div className="text-white text-lg font-medium">E-7 Arera Colony , Bhopal , MadhyaPradesh 462023</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[1.5]">
              <div className="glass bg-white/5 p-8 md:p-12 rounded-3xl border-white/5">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name *</label>
                    <input type="text" className="glass bg-white/5 border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address *</label>
                    <input type="email" className="glass bg-white/5 border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="yourname@company.com" />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Company / Organization</label>
                    <input type="text" className="glass bg-white/5 border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="Your Company Name" />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message *</label>
                    <textarea rows={5} className="glass bg-white/5 border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full py-5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
