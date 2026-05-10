import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/573017002176"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
    >
      <MessageSquare size={32} className="fill-current" />
    </motion.a>
  );
};
