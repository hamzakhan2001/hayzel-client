import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true); // 🔹 show spinner immediately

    let dataSend = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("hayzel-server-production.up.railway.app/email/sendEmail", {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        
      });

      if (res.ok) {
        toast.success("✅ Your message has been sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Server error. Please check your connection.");
    } finally {
      setLoading(false); // stop loader always
    }
  };

  return (
    <div className="bg-deepNavyBlue text-white font-poppins min-h-screen overflow-x-hidden">
      <section
        id="contact"
        className="py-30 px-30 sm:px-10 lg:px-20 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-poppins font-extrabold"
        >
          Get in Touch
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: "center" }}
          className="h-1 bg-vibrantBlue rounded-full w-32 mx-auto mt-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-md max-w-3xl mx-auto text-white"
        >
          We’d love to hear from you. Whether you’re interested in our digital
          marketing services, have a project idea, or just want to say hello,
          feel free to reach out. Our team is here to respond quickly and
          effectively to your needs.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 pb-20">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 p-8 rounded-2xl shadow-lg space-y-6"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white/5 border border-gray-500 
             focus:outline-none focus:ring-2 focus:ring-vibrantBlue placeholder-gray-300"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white/5 border border-gray-500 
             focus:outline-none focus:ring-2 focus:ring-vibrantBlue placeholder-gray-300"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address (e.g. example@mail.com)"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg bg-white/5 border border-gray-500 
             focus:outline-none focus:ring-2 focus:ring-vibrantBlue placeholder-gray-300"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-white/5 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-vibrantBlue placeholder-gray-300"
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer py-4 rounded-lg shadow-md font-semibold transition-transform transform ${
              loading
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-vibrantBlue text-white hover:bg-[#3aa9c2] hover:scale-105"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <FaSpinner className="animate-spin" /> Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-300">
              Reach out directly via phone, email, or visit our office. We value
              your time and make sure to respond promptly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-vibrantBlue text-2xl" />
              <p className="text-lg">+971 4 444 1444</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-vibrantBlue text-2xl" />
              <p className="text-lg">info@hayzeltech.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-vibrantBlue text-2xl" />
              <p className="text-lg">
                Hayzel Technologies, Defence Avenue, DHA Phase 1, Rawalpindi,
                Pakistan
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="#"
              className="text-vibrantBlue text-2xl hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-vibrantBlue text-2xl hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-vibrantBlue text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-vibrantBlue text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;
