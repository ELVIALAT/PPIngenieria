import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = ({ t }: { t: any }) => {
  return (
    <section id="contact" className="py-24 bg-surface px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
              {t.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none text-brand">
              {t.title}
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
              {t.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</p>
                  <p className="text-lg font-bold">paulocesar.pazdiaz@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Whatsapp / Cel</p>
                  <p className="text-lg font-bold">(+57) 301 700 2176</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="text-lg font-bold">{t.info.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 lg:p-16 shadow-2xl shadow-brand/5 rounded-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 font-heading">{t.form.name}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Su Nombre"
                    className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-lg outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 font-heading">{t.form.email}</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-lg outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 font-heading">{t.form.message}</label>
                <textarea 
                  rows={5} 
                  required 
                  placeholder="Describa los requerimientos de su proyecto..."
                  className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-lg outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-brand text-white py-5 rounded-lg text-[11px] font-black tracking-[0.3em] uppercase hover:bg-accent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer font-heading">
                {t.form.btn}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
