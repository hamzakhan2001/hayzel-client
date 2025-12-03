import React from "react";
import { motion } from "framer-motion";
import ceoImage from "../../assets/ceo.jpg";

const CeoMessage = () => {
  return (
    <section className="relative w-full h-full bg-white py-20 sm:py-24 md:py-27 px-6 sm:px-8 md:px-10 lg:px-28 lg:py-29 font-poppin">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-vibrantBlue">
            CEO's Message
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="h-1 bg-vibrantBlue rounded-full w-24 md:w-32 mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* CEO Image + Rotating Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">

              {/* Rotating Arc Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="
                    w-full h-full rounded-full border-4 border-transparent
                    border-t-vibrantBlue
                  "
                />
              </motion.div>

              {/* CEO Image */}
              <img
                src={ceoImage}
                alt="CEO"
                className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full shadow-lg border-4 border-white relative z-10"
              />
            </div>
          </motion.div>

          {/* Message Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl text-center lg:text-left"
          >
            <p className="text-lg sm:text-xl font-lato text-deepNavyBlue leading-relaxed mb-6">
              In today's digital world, a strong online presence is essential. At 
              <span className="font-semibold text-vibrantBlue"> Hayzel</span>, we're dedicated to empowering businesses like yours to thrive. 
              We provide tailored, results-driven strategies to help you achieve your goals in SEO, PPC, social media marketing, content creation, 
              and website development.
              <br /><br />
              Our team is committed to transparency, innovation, and measurable impact. We're here to help you navigate the digital world and 
              unlock your business's full potential. Let's grow together.
            </p>

            <p className="text-vibrantBlue font-bold text-xl">— Huzaifa Wali, CEO</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
