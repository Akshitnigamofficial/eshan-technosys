import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_8oaxitc",   // 🔥 replace
        "template_o0ioesf",  // 🔥 replace
        formRef.current,
        "_snvG4W5mN1WXTf7b"    // 🔥 replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <div className="pt-32 pb-24">
      <section className="py-12 relative">
        <div className="container mx-auto px-6">

          {/* HEADER */}
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

          {/* MAIN */}
          <div className="glass rounded-glass p-8 md:p-16 flex flex-col lg:flex-row gap-16">

            {/* LEFT INFO */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <p className="text-slate-400 mb-12 text-lg">
                Our team is here to help you navigate your digital transformation journey.
              </p>

              <div className="space-y-10">

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      Email Us
                    </div>
                    <div className="text-white text-lg font-medium">
                      navin@eshantechnosys.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      Call Us
                    </div>
                    <div className="text-white text-lg font-medium">
                      +91 9589533175
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      Visit Us
                    </div>
                    <div className="text-white text-lg font-medium">
                      Bhopal, India
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex-[1.5]">
              <div className="glass bg-white/5 p-8 md:p-12 rounded-3xl border-white/5">

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >

                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-slate-400 uppercase">
                      Full Name *
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="glass px-6 py-4 text-white rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-slate-400 uppercase">
                      Email Address *
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="glass px-6 py-4 text-white rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 uppercase">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      className="glass px-6 py-4 text-white rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 uppercase">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project..."
                      className="glass px-6 py-4 text-white rounded-xl resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg hover:shadow-lg transition-all"
                    >
                      {loading ? "Sending..." : "Send Message"}
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