import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How will your agency help my business grow?",
    answer:
      "We create customized digital strategies focused on your goals. From branding to lead generation, our approach ensures measurable growth and long-term impact.",
  },
  {
    question: "What makes your services different from other agencies?",
    answer:
      "We don’t believe in one-size-fits-all. Our team blends creativity, data-driven insights, and personalized strategies to deliver unique solutions tailored to your business.",
  },
  {
    question: "How do I know if digital marketing is right for my business?",
    answer:
      "Every business benefits from digital marketing. Whether you’re a startup or an established brand, we design scalable campaigns that fit your market and budget.",
  },
  {
    question: "How will you keep me updated on progress?",
    answer:
      "Transparency is key. We provide regular reports, performance dashboards, and strategy calls so you always know how campaigns are performing.",
  },
  {
    question: "How soon can I expect results?",
    answer:
      "Paid campaigns (like ads) bring immediate visibility, while SEO and branding take 3–6 months for lasting results. We combine both for short and long-term success.",
  },
  {
    question: "Do I have control over the strategies you use?",
    answer:
      "Absolutely. We work closely with you at every stage, getting approvals and feedback to make sure strategies align with your vision and business goals.",
  },
  {
    question: "How do you make sure I get a return on investment (ROI)?",
    answer:
      "We focus on results that matter—conversions, leads, and sales. Every campaign is optimized to maximize ROI, ensuring you get value for every dollar spent.",
  },
  {
    question: "Can small businesses really benefit from your services?",
    answer:
      "Yes! We’ve helped startups and small businesses build strong online presences. Our strategies are scalable and cost-effective, giving you big results on any budget.",
  },
  {
    question: "What if I’m not satisfied with the results?",
    answer:
      "We refine, test, and improve campaigns until they meet expectations. Our success is tied to your satisfaction, and we work until you see the results you need.",
  },
  {
    question: "Why should I choose your agency over others?",
    answer:
      "Because we treat your business as our own. With creativity, consistency, and commitment, we don’t just deliver services, we build partnerships for growth.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="bg-white py-16 px-4 sm:px-6 md:px-12 font-lato"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center font-poppins text-vibrantBlue">
          Frequently Asked Questions
        </h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
          className="h-1 bg-vibrantBlue rounded-full w-24 sm:w-32 md:w-48 mx-auto mt-3"
        />

        {/* FAQ Items */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 font-semibold text-base sm:text-lg cursor-pointer font-poppins transition-colors duration-300 text-white bg-deepNavyBlue"
              >
                {faq.question}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 py-4 text-black font-lato bg-gray-50 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
