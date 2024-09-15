import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateModal from "./UpdateModal";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [selectedBlog, setSelectedBlog] = useState(null); // Blog being edited
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/AllBlogs");
      setBlogs(response.data.Blogs || []);
    } catch (error) {
      toast.error("Failed to load blogs. Please try again later.");
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false); // Set loading to false once data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!isConfirmed) return;

    try {
      const response = await axiosInstance.delete(`/DeleteBlog/${id}`);
      if (response.status === 200) {
        toast.success("Blog deleted successfully!", { autoClose: 800 });
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    } catch (error) {
      toast.error("Cannot delete the blog. Please try again later.");
      console.error("Error deleting blog:", error);
    }
  };

  const handleUpdate = (blog) => {
    setSelectedBlog(blog); // Set the selected blog for editing
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setSelectedBlog(null); // Clear selected blog
  };

  const handleSubmitUpdate = async (values) => {
    try {
      const response = await axiosInstance.patch(
        `/PatchWiseUpdation/${selectedBlog.id}`,
        values
      );
      if (response.status === 200) {
        toast.success("Blog updated successfully!", { autoClose: 800 });
        fetchData(); // Refresh blog list after update
        handleCloseModal(); // Close the modal
      }
    } catch (error) {
      toast.error("Error updating blog. Please try again later.");
      console.error("Error updating blog:", error);
    }
  };

  const truncateContent = (content, maxLength = 100) => {
    return content.length > maxLength
      ? `${content.substring(0, maxLength)}...`
      : content;
  };

  const BlogCards = ({ blog, onUpdate, onDelete }) => (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      key={blog.id}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{truncateContent(blog.content)}</p>
        <p className="text-gray-500 text-sm">
          Published At: {moment(blog.createdAt).format("DD MMMM YYYY, h:mm a")}
        </p>
      </div>

      <div className="p-4 flex justify-between items-center">
        <Link
          to={`/PageDetails/${blog.id}`}
          className="text-blue-500 hover:underline"
        >
          <Button label="Read More" />
        </Link>

        <div className="flex space-x-2">
          <button
            onClick={() => onUpdate(blog)}
            className="bg-blue-600 text-white rounded px-3 py-1 flex items-center hover:bg-blue-700 transition"
            aria-label={`Update blog titled ${blog.title}`}
          >
            <FaEdit className="mr-1" /> Update
          </button>

          <button
            onClick={() => onDelete(blog.id)}
            className="bg-red-600 text-white rounded px-3 py-1 flex items-center hover:bg-red-700 transition"
            aria-label={`Delete blog titled ${blog.title}`}
          >
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>

        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCards
                  key={blog.id}
                  blog={blog}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="col-span-full text-center">
                <h1 className="text-xl font-semibold text-gray-700">
                  No blogs available
                </h1>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Update Modal */}
      {showModal && (
        <UpdateModal
          initialValues={selectedBlog}
          onSubmit={handleSubmitUpdate}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default BlogCards;
