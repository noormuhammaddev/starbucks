# Blog Post App

This project is a full-stack blog post management application where users can create, edit, delete, and view blog posts. It includes both frontend and backend implementations.

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Technologies

### Frontend:
- **React 18**: JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool.
- **TailwindCSS**: Utility-first CSS framework.
- **MUI (Material-UI)**: UI components for React.
- **Formik**: Form management in React.
- **React-Quill**: Rich text editor for React.
- **Redux**: State management for React.
- **Axios**: Promise-based HTTP client.
- **React Router DOM**: Client-side routing.
- **React Toastify**: Notifications system.

### Backend:
- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB with Mongoose**: NoSQL database and ODM for MongoDB.
- **Joi**: Data validation.
- **UUID**: Universal unique identifier generation.
- **Nodemon**: Automatically restart the server during development.

## Features
- **Blog Post Management**: Create, edit, and delete blog posts.
- **Rich Text Editor**: Using React-Quill for writing blog content.
- **Form Validation**: Using Formik and Joi for validating inputs on both client and server.
- **Routing**: React Router for handling navigation between different pages.
- **Notifications**: Toast notifications to inform users of actions.
- **State Management**: Redux for managing application state across components.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
  
### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-app
   cd blog-app/frontend
