import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center 
                 bg-cover bg-center px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deepNavyBlue/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-extrabold font-poppins text-white leading-tight"
        >
          Empowering Your Digital Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl 
                     font-lato text-gray-200"
        >
          We craft digital marketing strategies that deliver results and drive
          real business success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 
                       bg-vibrantBlue text-white 
                       font-lato font-semibold rounded-lg shadow-lg 
                       hover:bg-[#3aa9c2] transition-all hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
