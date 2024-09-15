import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Default Layout/DefaultLayout";
import Home from "../pages/Home";
import BlogPost from "../pages/BlogPost";
import PageDetails from "../pages/PageDetails";
import { ToastContainer } from "react-toastify";
import AboutUs from "../pages/AboutUs";

const BlogRoutes = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

        <Route
          path="/NewBlogPost"
          element={
            <DefaultLayout>
              <BlogPost />
            </DefaultLayout>
          }
        />

        <Route
          path="/PageDetails/:id"
          element={
            <DefaultLayout>
              <PageDetails />
            </DefaultLayout>
          }
        />

        <Route
          path="/AboutUs"
          element={
            <DefaultLayout>
              <AboutUs />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
};

export default BlogRoutes;
