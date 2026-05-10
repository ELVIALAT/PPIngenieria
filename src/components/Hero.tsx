import { motion } from "motion/react";
import { Calculator, BarChart3, ShieldCheck, Cpu } from "lucide-react";

const IconMap: any = {
  Calculator: Calculator,
  BarChart3: BarChart3,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu
};

export const Navbar = ({ t, toggleLang }: { t: any, toggleLang: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-slate-200 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/Logo.png" alt="PP Ingeniería Logo" className="h-36 w-auto" />
        </div>
        <div className="hidden lg:flex gap-12 text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <a href="#expertise" className="hover:text-brand transition-all duration-300 relative group">
            {t.expertise}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all" />
          </a>
          <a href="#experience" className="hover:text-brand transition-all duration-300 relative group">
            {t.experience}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all" />
          </a>
          <a href="#sectors" className="hover:text-brand transition-all duration-300 relative group">
            {t.sectors}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all" />
          </a>
          <a href="#profile" className="hover:text-brand transition-all duration-300 relative group">
            {t.profile}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-[10px] font-black tracking-widest text-zinc-400 hover:text-brand transition-colors border border-zinc-200 px-2 py-1 rounded"
          >
            {t.lang}
          </button>
          <a 
            href="#contact"
            className="bg-brand text-white px-6 py-2.5 text-[10px] font-black tracking-widest hover:bg-accent duration-300 transition-colors uppercase font-heading cursor-pointer block"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export const Hero = ({ t }: { t: any }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero.png" 
          alt="Technical Engineering Blueprint" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/90 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
            <span className="w-10 h-[1px] bg-accent"></span> {t.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-brand mb-8 uppercase leading-[1.1] font-heading">
            {t.title1} <br />
            <span className="text-accent/60">{t.title2}</span> <br />
            <span className="text-brand">{t.title3}</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mb-12 font-light leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-brand text-white px-10 py-5 text-[10px] font-black tracking-[0.3em] hover:bg-accent hover:shadow-lg hover:-translate-y-0.5 duration-300 transition-all uppercase shadow-2xl shadow-brand/20 cursor-pointer font-heading">
              {t.btn1}
            </button>
            <button className="border border-brand/20 text-brand px-10 py-5 text-[10px] font-black tracking-[0.3em] hover:bg-white hover:shadow-md duration-300 transition-all uppercase cursor-pointer font-heading">
              {t.btn2}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
