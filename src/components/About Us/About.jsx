import React from "react";
// import video from "../../assets/video.mp4";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full h-full bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-10 lg:px-28 lg:py-14 font-poppins"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
     <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-poppins sm:text-4xl md:text-5xl font-extrabold text-vibrantBlue">
            About Us
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

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-deepNavyBlue">
              Who We Are?
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-semibold text-vibrantBlue">
                Hayzel Technologies
              </span>
              , we are passionate about helping businesses thrive in the digital
              world. Our team of strategists, designers, and marketers
              collaborates to create innovative solutions that combine
              creativity with performance.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We specialize in a wide range of digital marketing services,
              including{" "}
              <span className="font-medium text-deepNavyBlue">
                Social Media Marketing, Email Marketing, Search Engine
                Optimization, PPC Campaigns, Leads Generation, Search Engine
                Marketing, and Content Marketing
              </span>
              . From increasing visibility to generating leads, our goal is to
              ensure measurable results that drive growth.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you’re a startup aiming to build your presence or an
              enterprise looking to scale, we deliver tailored strategies that
              align with your goals and create long-term impact.
            </p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <video src='https://drive.google.com/file/d/1E8D54LmKdLL2bNJhOJ9X6jxH-rKKABXB/view?usp=sharing' controls 
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
