import { motion } from "motion/react";
import { GraduationCap, ChevronRight } from "lucide-react";

export const Profile = ({ t }: { t: any }) => {
  return (
    <section id="profile" className="py-32 bg-white text-brand px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] relative overflow-hidden bg-slate-100 rounded-tr-[4rem]"
          >
             <img 
               src="/assets/profile.png" 
               alt="Paulo Cesar Paz Díaz - Executive Profile"
               className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
             />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand/5 -z-10 rounded-tr-[4rem]" />
        </div>

        <div>
          <h2 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6">{t.badge}</h2>
          <h3 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
            {t.title1} <br />
            <span className="italic text-zinc-300">{t.title2}</span>
          </h3>
          <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
            {t.bio}
          </p>

          <div className="space-y-6">
            <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
              <GraduationCap size={16} className="text-accent" /> 
              {t.eduBadge}
            </h4>
            {t.credentials.map((cred: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="mt-1.5 p-1 rounded-sm bg-zinc-50 group-hover:bg-brand group-hover:text-white transition-colors">
                  <ChevronRight size={12} />
                </div>
                <p className="text-sm font-medium text-zinc-600">{cred}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="bg-zinc-50 p-8 group hover:bg-brand transition-all duration-300 cursor-default flex flex-col justify-between h-32 border border-zinc-100">
              <span className="text-3xl font-black text-brand group-hover:text-accent transition-colors">+180M</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">USD Gestionados</span>
            </div>
            
            <div className="bg-zinc-50 p-8 group hover:bg-brand transition-all duration-300 cursor-default flex flex-col justify-between h-32 border border-zinc-100">
              <span className="text-3xl font-black text-brand group-hover:text-accent transition-colors">15+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">Años Experiencia</span>
            </div>
            
            <div className="bg-zinc-50 p-8 group hover:bg-brand transition-all duration-300 cursor-default flex flex-col justify-between h-32 border border-zinc-100">
              <span className="text-3xl font-black text-brand group-hover:text-accent transition-colors">FIDIC</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">Estándares Int.</span>
            </div>

            <div className="bg-zinc-50 p-8 group hover:bg-brand transition-all duration-300 cursor-default flex flex-col justify-between h-32 border border-zinc-100">
              <span className="text-3xl font-black text-brand group-hover:text-accent transition-colors">IA / BI</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">Transformación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Sectors = ({ t }: { t: any }) => {
  return (
    <section id="sectors" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-12 text-center">{t.badge}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-slate-100 border border-slate-100">
          {t.items.map((s: any, idx: number) => (
            <div key={idx} className="group relative h-[32rem] overflow-hidden bg-brand flex flex-col justify-end p-10">
              <img 
                src={s.img} 
                alt={s.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:opacity-70" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
              <h4 className="relative z-10 text-xl font-bold text-white uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors duration-500">
                {s.name}
              </h4>
              <div className="relative z-10 w-0 h-[2px] bg-accent mt-6 group-hover:w-full transition-all duration-700" title="Indicator" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
