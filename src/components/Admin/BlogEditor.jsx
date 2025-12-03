// src/components/Admin/BlogEditor.jsx
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { adminCreateBlog, adminUpdateBlog, fetchBlogById } from "../../service/adminApi";
import { useNavigate, useParams } from "react-router-dom";

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author_name, setAuthorName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null); // show current image
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await fetchBlogById(id);
        const blog = res.data;
        if (blog) {
          setTitle(blog.title || "");
          setExcerpt(blog.excerpt || "");
          setContent(blog.content || "");
          setAuthorName(blog.author_name || "");
          setFeaturedImage(blog.featured_image || null);
        }
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("excerpt", excerpt);
      fd.append("content", content);
      fd.append("author_name", author_name);
      if (imageFile) fd.append("featured_image", imageFile);

      if (id) {
        await adminUpdateBlog(id, fd);
        alert("Blog updated");
      } else {
        await adminCreateBlog(fd);
        alert("Blog created");
      }
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">{id ? "Edit Blog" : "Add Blog"}</h2>

        <form onSubmit={handleSubmit}>
          <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full mb-3" placeholder="Title" required />
          <input value={excerpt} onChange={e => setExcerpt(e.target.value)} className="border p-2 w-full mb-3" placeholder="Excerpt" />
          <input value={author_name} onChange={e => setAuthorName(e.target.value)} className="border p-2 w-full mb-3" placeholder="Author name" />

          <div className="mb-3">
            <label className="block mb-1">Featured Image</label>
            {featuredImage && (
              <div className="mb-2">
                <img src={`hayzel-server-production.up.railway.app${featuredImage}`} alt="Current" className="w-40 rounded" />
              </div>
            )}
            <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Content</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link', 'image'],
                  ['clean']
                ]
              }}
            />
          </div>

          <button disabled={loading} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? "Saving..." : "Save & Publish"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
