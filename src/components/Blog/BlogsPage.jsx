// src/pages/BlogsPage.jsx
import React, { useEffect, useState } from "react";
import { fetchBlogs} from "../../service/adminApi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer"; // adjust path if different
import logo from "../../assets/hayzel-logo.png"; // adjust path if different
const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBlogs();
        setBlogs(res.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-deepNavyBlue text-white py-6 px-10 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl font-bold font-poppins"
          >
            <img
              src={logo}
              alt="Hayzel Technologies Logo"
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto"
            />
          </div>

          {/* Menu */}
          <ul className="flex space-x-6 font-lato font-medium">
            <li
              className="hover:text-vibrantBlue transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-vibrantBlue transition cursor-pointer"
              onClick={() => navigate("/blogs")}
            >
              Blog
            </li>
            <li
              className="hover:text-vibrantBlue transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-deepNavyBlue font-poppins mb-4">
            Our Latest Blogs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest stories, ideas, and tips curated to keep you
            updated and inspired.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/blog/${b.slug}`)}
              className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer overflow-hidden"
            >
              {b.featured_image && (
                <img
                  src={`${
                    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
                  }${b.featured_image}`}
                  alt={b.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-deepNavyBlue">
                  {b.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {b.excerpt}
                </p>
                <p className="text-xs text-gray-500">
                  {b.author_name} •{" "}
                  {new Date(b.created_at).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-vibrantBlue text-white border-vibrantBlue"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogsPage;
