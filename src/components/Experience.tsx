import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Building2, Tag } from "lucide-react";

export const Experience = ({ t }: { t: any }) => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 text-brand px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{t.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              {t.title1} <br />
              <span className="text-zinc-200">{t.title2}</span>
            </h3>
          </div>
          <p className="max-w-md text-zinc-500 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-zinc-200 border border-zinc-200">
          {t.projects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 hover:bg-surface transition-all duration-300 overflow-hidden border border-transparent hover:border-slate-200 hover:shadow-md"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 py-1.5 px-3 bg-slate-50 rounded-sm">
                    {project.sector}
                  </span>
                  <div className="text-slate-300 group-hover:text-accent transition-colors duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="flex-grow">
                  <h4 className="text-3xl font-black tracking-tighter uppercase mb-2 group-hover:text-brand transition-colors leading-none font-heading">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm mb-6 tracking-wide">
                    <Tag size={14} className="fill-accent/10" />
                    {project.budget}
                  </div>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 border-t border-zinc-100 pt-8 mt-auto">
                  <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin size={12} className="text-brand/50" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                    <Building2 size={12} className="text-brand/50" />
                    {project.company}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 p-8 text-[12rem] font-black text-brand/[0.01] leading-none select-none pointer-events-none group-hover:text-brand/[0.03] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
