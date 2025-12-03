import React from "react";
import { motion } from "framer-motion";
import img1 from "./../../assets/service1.svg";
import img2 from "./../../assets/service2.svg";
import img3 from "./../../assets/service3.svg";
import img4 from "./../../assets/service4.svg";
import "./CardStyles.css";
import { useState } from "react";

const services = [
  {
    title: "Brand Management",
    img: img1,
    desc: "We help you build a strong, consistent brand identity that resonates with your audience, ensuring long-term trust and recognition.",
  },
  {
    title: "Content Marketing",
    img: img2,
    desc: "Crafting compelling, high-quality content that engages, informs, and converts your target audience while enhancing brand credibility.",
  },
  {
    title: "Email Marketing",
    img: img3,
    desc: "Strategically designed email campaigns to nurture leads, boost customer engagement, and drive conversions with personalized messaging.",
  },
  {
    title: "SEO & SEM",
    img: img4,
    desc: "Optimizing your online presence with cutting-edge SEO strategies and data-driven paid advertising to increase visibility and drive traffic.",
  },
];

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section
      id="services"
      className="relative w-full h-auto bg-deepNavyBlue py-20 sm:py-24 md:py-27 px-6 sm:px-8 md:px-10 lg:px-28 lg:py-29 font-poppins"
    >
      {/* Top Heading */}
        {/* Heading */}
     <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-poppins sm:text-4xl md:text-5xl font-extrabold text-white">
            Services
          </h2>

          {/* Animated underline that grows from center */}
          <motion.div
             initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
          className="h-1 bg-vibrantBlue rounded-full w-24 sm:w-28 md:w-32 mx-auto mt-4"
          />
        </motion.div>
        
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6 text-base sm:text-lg max-w-3xl mx-auto text-gray-200"
                >
       
        Strategic, end-to-end digital solutions designed to grow awareness,
        generate demand, and drive measurable results.
      </motion.p>

      {/* Services cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-[90%] mt-10 max-w-8xl items-center mx-auto"
        style={{ perspective: 1500 }}
      >
        {services.map((service, index) => {
          const isFlipped = flippedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  y: isFlipped ? -10 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-80 rounded-xl card-wrapper"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT */}
                <div className="card-face">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-24 h-24 sm:w-20 sm:h-20 object-contain mb-6"
                    style={{ pointerEvents: "none" }}
                  />
                  <h4 className="font-poppins text-xl font-bold text-vibrantBlue">
                    {service.title}
                  </h4>
                  
                </div>

                {/* BACK */}
                <div className="card-face card-back">
                  <p className="font-lato text-sm sm:text-md md:text-md lg:text-lg">{service.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
