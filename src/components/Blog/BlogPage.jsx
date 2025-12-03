// src/pages/BlogPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogBySlug, fetchBlogs } from "../../service/adminApi";
import Footer from "../Footer/Footer";
import { FaUser, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/hayzel-logo.png";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBlogBySlug(slug);
        setBlog(res.data);

        const all = (await fetchBlogs()).data || [];
        const filtered = all.filter((b) => b.id !== res.data.id);

        setRecentBlogs(filtered.slice(0, 3));
        setLatestBlogs(filtered.slice(0, 3));
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    })();
  }, [slug]);

  if (!blog) return <div className="p-10 text-center">Loading...</div>;

  const imageBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const imgUrl = (path) =>
    `${imageBaseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  return (
    <div className="bg-white min-h-screen">
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
          </ul>
        </div>
      </nav>
      {/* Blog Page Layout */}
      <div className="max-w-7xl mx-auto px-10 py-20 sm:px-12 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* ===== Left Sidebar (Recent Posts) ===== */}
          {/* ===== Left Sidebar (Recent Posts) ===== */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl shadow-sm p-5 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 border-b-2 border-vibrantBlue/30 pb-3 text-gray-800">
                Recent Posts
              </h3>

              <ul className="space-y-5">
                {recentBlogs.length > 0 ? (
                  recentBlogs.slice(0, 6).map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-1"
                      onClick={() => navigate(`/blog/${item.slug}`)}
                    >
                      {/* Thumbnail */}
                      {item.featured_image && (
                        <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={imgUrl(item.featured_image)}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Text Details */}
                      <div className="flex-1">
                        <h4
                          className="text-sm font-semibold text-gray-800 leading-snug hover:text-vibrantBlue line-clamp-2"
                          onClick={() => navigate(`/blog/${item.slug}`)}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <FaClock className="text-gray-400 text-[10px]" />
                          {new Date(item.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500 italic">
                    No recent posts available
                  </li>
                )}
              </ul>
            </div>
          </aside>

          {/* ===== Main Blog Content ===== */}
          <main className="lg:col-span-3">
            {/* Blog Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {blog.title}
            </h1>

            {/* Author and Date */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <span className="flex items-center gap-2">
                <FaUser className="text-gray-500" />{" "}
                {blog.author_name || "Admin"}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-gray-500" />{" "}
                {new Date(blog.created_at).toLocaleDateString()}
              </span>
            </div>

            {/* Featured Image — small width but full visible */}
            {blog.featured_image && (
              <div className="mb-8 flex justify-center">
                <img
                  src={imgUrl(blog.featured_image)}
                  alt={blog.title}
                  className="w-full max-w-3xl h-auto object-contain rounded-md shadow-sm"
                  style={{ maxHeight: 500 }}
                />
              </div>
            )}

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>
          </main>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
