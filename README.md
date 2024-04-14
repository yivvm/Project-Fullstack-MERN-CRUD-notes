# MERN Notes App: A CRUD Application for Taking and Managing Notes

This project demonstrates the integration of frontend and backend components to create a full-stack web application capable of performing CRUD operations on notes, offering a complete solution for note-taking and management, as well as providing user authentication features for secure access control.

This repository hosts the code for a comprehensive CRUD (Create, Read, Update, Delete) notes application built on the MERN stack. MERN stands for MongoDB (the database), Express.js (the backend framework), React.js (the frontend framework), and Node.js (the JavaScript runtime environment).

The backend, developed with Express.js and Node.js, provides RESTful APIs for handling note-related operations such as creating, reading, updating, and deleting notes. It also includes endpoints for user authentication, including signup, login, and logout functionalities. The backend communicates with the MongoDB database to store and retrieve note data as well as user authentication data.

On the frontend, React.js is utilized to create an interactive user interface for managing notes. React Router is employed for client-side routing, allowing seamless navigation between different views of the application. Additionally, the frontend includes pages for user authentication, enabling users to sign up, log in, and log out of the application securely.

## Features

## Features

- **Create Notes**: Users can create new notes by providing a title and content for each note. Upon creation, the note is saved to the database for future reference.

- **Read Notes**: Users can browse through a list of existing notes, viewing summaries of each note. Additionally, users can click on individual notes to view their full details, including the title, content, and creation date.

- **Update Notes**: Users have the ability to edit and update existing notes. They can modify the title and content of a note, making changes as needed. Once updated, the changes are reflected in the database.

- **Delete Notes**: Users can delete unwanted notes from their collection. This action removes the note permanently from the database, freeing up storage space and decluttering the user interface.

- **User Signup**: New users can sign up for an account by providing a unique username, email address, and password. Upon successful signup, the user's credentials are securely stored in the database for authentication purposes.

- **User Login**: Registered users can log in to their accounts using their username and password. Upon successful authentication, users gain access to their personalized dashboard and can begin managing their notes.

- **User Logout**: Logged-in users can log out of their accounts, terminating their current session. This action ensures the security of the user's account by preventing unauthorized access to their data.

## Technologies Used

- **Frontend**: React.js, React Router
- **Backend**: Express.js, MongoDB, Mongoose
- **Additional Dependencies**: dotenv, cors, cookie-parser

## Deployment

- **Frontend**: https://project-mern-crud-notes-1.onrender.com
- **Backend**: https://project-mern-crud-notes.onrender.com
