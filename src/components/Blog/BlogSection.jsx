// src/components/Blog/BlogSection.jsx
import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../service/adminApi";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogCard = ({ b }) => {
  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 h-auto mb-8 mt-4 flex flex-col justify-between overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {b.featured_image && (
        <div className="h-40 sm:h-48 w-full overflow-hidden rounded-lg mb-4">
          <img
            src={`${apiBase}${b.featured_image}`}
            alt={b.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <h3 className="font-poppins font-bold text-lg sm:text-xl mb-2 text-gray-800 line-clamp-2">
          {b.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 flex-grow line-clamp-3 font-lato mb-4">
          {b.excerpt}
        </p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 font-lato mt-auto">
        {b.author_name} • {new Date(b.created_at).toLocaleDateString()}
      </p>
    </motion.div>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBlogs();
        setBlogs(res.data.slice(0, 12));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <section
      id="blogs"
      className="relative w-full h-auto py-16 px-4 sm:px-6 md:px-12 bg-white font-poppins"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deepNavyBlue">
            Blogs
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
            className="h-1 bg-vibrantBlue rounded-full w-24 md:w-32 mx-auto mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-6 font-lato leading-relaxed mb-25"
          >
            Discover expert insights, creative stories, and helpful tips from
            our team — curated to keep you inspired and informed.
          </motion.p>
        </motion.div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1440: { slidesPerView: 4, spaceBetween: 50 },
            }}
            className="pb-14 pt-6"
          >
            {blogs.slice(0, 6).map((b) => (
              <SwiperSlide key={b.id}>
                <div
                  onClick={() => navigate(`/blog/${b.slug}`)}
                  className="cursor-pointer"
                >
                  <BlogCard b={b} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-deepNavyBlue text-white p-3 rounded-full shadow hover:bg-[#1a2a5a] transition">
            <ChevronLeft size={18} />
          </button>

          <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-deepNavyBlue text-white p-3 rounded-full shadow hover:bg-[#1a2a5a] transition">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/blogs")}
            className="font-lato px-6 py-3 sm:px-8 sm:py-4 bg-vibrantBlue text-white font-semibold rounded-lg shadow-lg hover:bg-[#3aa9c2] transition-all transform hover:scale-105"
          >
            View More Blogs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
