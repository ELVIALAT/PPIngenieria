import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

export const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-white text-brand py-20 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="flex items-center mb-8">
             <img src="/assets/Logo.png" alt="PP Ingeniería Logo" className="h-16 w-auto" />
          </div>
          <p className="text-zinc-500 max-w-sm font-light mb-10 leading-relaxed text-sm">
            {t.desc}
          </p>
        </div>

        <div className="flex flex-col md:items-end">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8">Social</h4>
          <a 
            href="https://linkedin.com/in/paulo-paz-diaz-4087125a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand transition-colors"
          >
            <Linkedin size={16} className="text-accent" />
            LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Paulo Cesar Paz Díaz | {t.trusted}
        </span>
      </div>
    </footer>
  );
};
