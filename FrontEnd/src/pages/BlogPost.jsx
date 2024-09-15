import React from "react";
import { toast } from "react-toastify";
import axiosInstance from "../axios/axios";
import { Formik, Field, Form } from "formik";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axiosInstance.post("CreateBlog", values);
      toast.success("Blog posted successfully!", { autoClose: 800 });
      resetForm();

      //navigating to home page
      navigate("/");
    } catch (error) {
      toast.error("Sorry, Try Again", { autoClose: 800 });
      console.error("Could not post the blog:", error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-[250px] flex items-center justify-center shadow-lg">
        <h1 className="text-white text-4xl font-bold">
          Share Your Story with the World
        </h1>
      </div>

      <div className="container mx-auto p-6 mt-8 bg-white rounded-lg shadow-md max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Post a New Blog
        </h2>

        <Formik
          initialValues={{ title: "", content: "", author: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div className="mb-4">
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                  className="p-3 border border-gray-300 rounded w-full shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <Field
                  as="textarea"
                  id="content"
                  name="content"
                  placeholder="Write your blog content here"
                  className="p-3 border border-gray-300 rounded w-full shadow-sm focus:ring-2 focus:ring-green-500"
                  rows="6"
                />
              </div>
              <div className="mb-4">
                <Field
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Your name or signature"
                  className="p-3 border border-gray-300 rounded w-full shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="text-center">
                <Button label="Post Blog" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default BlogPost;
