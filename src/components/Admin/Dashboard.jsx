// src/components/Admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  verifyAdmin,
  fetchBlogs,
  adminDeleteBlog,
} from "../../service/adminApi";
import { motion } from "framer-motion";
import { FaBlog, FaPlus, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await verifyAdmin();
        setAdmin(res.data.admin);
      } catch {
        localStorage.removeItem("token");
        navigate("/admin/login");
        return;
      }
      try {
        const b = await fetchBlogs();
        setBlogs(b.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await adminDeleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-deepNavyBlue text-vibrantBlue flex flex-col justify-between shadow-lg">
        <div>
          <div className="text-center py-6 border-b border-blue-800">
            <h2 className="text-2xl font-bold tracking-wide">Admin Panel</h2>
            <p className="text-sm text-gray-300 mt-1">
              {admin ? admin.name : "Admin"}
            </p>
          </div>

          <nav className="flex flex-col mt-6 space-y-2 px-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                activeTab === "dashboard"
                  ? "bg-vibrantBlue text-white"
                  : "hover:bg-blue-900"
              }`}
            >
              <FaTachometerAlt /> Dashboard
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                activeTab === "blogs"
                  ? "bg-vibrantBlue text-white"
                  : "hover:bg-blue-900"
              }`}
            >
              <FaBlog /> Blogs
            </button>

            <Link
              to="/admin/blogs/new"
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-blue-900 transition"
            >
              <FaPlus /> Add Blog
            </Link>
          </nav>
        </div>

        <div className="border-t border-blue-800 p-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-red-700 bg-red-600 text-white w-full justify-center"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome, {admin?.name || "Admin"}
            </h1>

            {/* Simple Stats */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-gray-500 font-semibold mb-2">
                  Total Blogs
                </h3>
                <p className="text-3xl font-bold text-vibrantBlue">
                  {blogs.length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-gray-500 font-semibold mb-2">
                  Latest Blog
                </h3>
                <p className="text-lg text-gray-700 truncate">
                  {blogs[0]?.title || "No blogs yet"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-gray-500 font-semibold mb-2">
                  Admin Status
                </h3>
                <p className="text-lg font-semibold text-green-600">Active</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blogs CRUD Tab */}
        {activeTab === "blogs" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
              <Link
                to="/admin/blogs/new"
                className="bg-vibrantBlue text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition"
              >
                + Add New Blog
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <div className="overflow-x-auto mt-6">
                <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-deepNavyBlue text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Title</th>
                      <th className="p-4 text-left font-semibold">Author</th>
                      <th className="p-4 text-left font-semibold">Created</th>
                      <th className="p-4 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {blogs.length > 0 ? (
                      blogs.map((blog, index) => (
                        <tr
                          key={blog.id}
                          className={`transition-all duration-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } `}
                        >
                          <td className="p-4 font-medium">{blog.title}</td>
                          <td className="p-4">{blog.author_name}</td>
                          <td className="p-4">
                            {new Date(blog.created_at).toLocaleString()}
                          </td>
                          <td className="p-4 flex gap-3">
                            <Link
                              to={`/admin/blogs/${blog.id}/edit`}
                              className="text-vibrantBlue font-semibold cursor-pointer transition-colors"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="text-red-600 font-semibold cursor-pointer transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="text-center p-6 text-gray-500 italic"
                        >
                          No blogs found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="block md:hidden space-y-4 mt-6">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition"
                    >
                      <h3 className="font-bold text-lg mb-1 text-deepNavyBlue">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {blog.author_name}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {new Date(blog.created_at).toLocaleString()}
                      </p>
                      <div className="flex gap-3">
                        <Link
                          to={`/admin/blogs/${blog.id}/edit`}
                          className="text-vibrantBlue font-semibold hover:underline"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-600 font-semibold hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
