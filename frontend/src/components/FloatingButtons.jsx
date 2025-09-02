import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = ({ phoneNumber = "1234567890", tooltipText = "Chat with us!" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999] pointer-events-auto flex items-center"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {/* Professional Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="mr-3 relative bg-white/90 backdrop-blur-md text-gray-900 text-sm px-4 py-2 rounded-lg shadow-xl font-semibold whitespace-nowrap"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {tooltipText}
            {/* Arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white/90 backdrop-blur-md rotate-45 shadow-md"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaWhatsapp className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingButtons;
