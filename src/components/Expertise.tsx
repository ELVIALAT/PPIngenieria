import { motion } from "motion/react";
import { Calculator, BarChart3, ShieldCheck, Cpu } from "lucide-react";

const IconMap: any = {
  Calculator: Calculator,
  BarChart3: BarChart3,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu
};

export const Expertise = ({ t }: { t: any }) => {
  return (
    <section id="expertise" className="py-24 bg-white text-brand px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{t.badge}</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            {t.title1} <br />
            <span className="text-accent italic">{t.title2}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-100 border border-slate-100">
          {t.items.map((item: any, index: number) => {
            const Icon = IconMap[item.icon];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-12 bg-white group h-full flex flex-col border border-transparent hover:border-slate-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-10 w-14 h-14 bg-slate-50 flex items-center justify-center text-brand group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-lg shadow-sm">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-black mb-5 uppercase tracking-tighter leading-none text-brand font-heading">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
