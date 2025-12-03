import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaBullhorn, FaRegLightbulb } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChartLine className="text-vibrantBlue text-4xl" />,
      title: "Data-Driven Strategies",
      description:
        "We create campaigns backed by analytics and insights to maximize ROI and conversions.",
    },
    {
      icon: <FaUsers className="text-vibrantBlue text-4xl" />,
      title: "Expert Team",
      description:
        "Our digital marketing experts bring years of experience in SEO, PPC, social media, and branding.",
    },
    {
      icon: <FaBullhorn className="text-vibrantBlue text-4xl" />,
      title: "Creative Campaigns",
      description:
        "We craft innovative campaigns that capture attention and strengthen your brand presence.",
    },
    {
      icon: <FaRegLightbulb className="text-vibrantBlue text-4xl" />,
      title: "Tailored Solutions",
      description:
        "No one-size-fits-all. We design strategies tailored to your business goals and target audience.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative bg-deepNavyBlue text-white py-20 sm:py-24 px-6 sm:px-10 lg:px-20 font-poppins border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Why Choose Us?
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
          className="h-1 bg-vibrantBlue rounded-full w-24 sm:w-28 md:w-32 mx-auto mt-4"
        />

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg max-w-3xl mx-auto text-gray-200"
        >
          We don’t just market brands, we transform them. Here’s why businesses
          trust Hayzel Technologies for their digital growth.
        </motion.p>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg 
              hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
