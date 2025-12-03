// src/service/adminApi.js
import axios from "axios";

const API_BASE_URL = "https://endearing-cucurucho-aa39c4.netlify.app/";

// Create axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL}`,
});

// ✅ Automatically attach token for all admin endpoints
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// =======================
// ADMIN AUTH
// =======================
export const registerAdmin = (data) => api.post("/api/admin/register", data);
export const loginAdmin = (data) => api.post("/api/admin/login", data);
export const verifyAdmin = () => api.get("/api/admin/verify");

// =======================
// ADMIN BLOG CRUD
// =======================
export const adminCreateBlog = (formData) => {
  const token = localStorage.getItem("token");
  return api.post("/api/admin/blogs", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const adminUpdateBlog = (id, formData) => {
  const token = localStorage.getItem("token");
  return api.put(`/api/admin/blogs/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const adminDeleteBlog = (id) => api.delete(`/api/admin/blogs/${id}`);
export const fetchBlogById = (id) => api.get(`/api/admin/blogs/${id}`);

// =======================
// PUBLIC BLOGS
// =======================
export const fetchBlogs = () => api.get("/api/blogs");
export const fetchBlogBySlug = (slug) => api.get(`/api/blogs/${slug}`);

// =======================
// COMMENTS & LIKES
// =======================
export const postComment = (data) => api.post("/api/comments", data);
export const fetchComments = (blogId) => api.get(`/api/comments/${blogId}`);
export const replyCommentAdmin = (id, data) =>
  api.put(`/api/admin/comments/${id}/reply`, data);

// ✅ Public Like Increment
export const incrementLikePublic = (id) => api.post(`/api/blogs/${id}/like`);
