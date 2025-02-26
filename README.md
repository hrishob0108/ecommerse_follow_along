# E-Commerce Application (MERN Stack)

This is a mentor-guided project to build a full-fledged **E-commerce application** using the **MERN stack** (**MongoDB, Express.js, React.js, and Node.js**). The application includes features such as **user authentication, product management, order handling, and secure payment processing**.

## Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios (for API calls)  
- React Router (for navigation)  
- Context API (for global state management)  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose for database handling)  
- Multer (for file uploads)  
- JWT (JSON Web Tokens for authentication)  
- bcrypt (for password hashing)  

## Project Milestones  

### Milestone 1: Project Overview
- Understood the MERN project structure and key functionalities.  
- Explored core e-commerce features:  
  - User Authentication (Login & Registration)  
  - Product Management (Add, update, and retrieve products)  
  - Order Handling (Manage customer orders)  
- Discussed REST API structure and MongoDB schema design.  
- Set up the GitHub repository and planned the project workflow.  

### Milestone 2: Frontend & Backend Setup
- Organized frontend and backend into separate directories.  
- **Frontend**:  
  - Created a React app and configured Tailwind CSS.  
  - Built the login page with user authentication.  
- **Backend**:  
  - Set up a Node.js server using Express.  
  - Connected the backend to MongoDB.  
- The first user-facing feature (Login Page) is complete.  

### Milestone 3: Backend Development & Database Connection
- Implemented a structured backend with routes, controllers, models, and middleware.  
- Configured the Node.js server to handle API requests.  
- Connected MongoDB for efficient data storage.  
- Added basic error handling to improve debugging and user experience.  

### Milestone 4: User Management & File Uploads
- Introduced user management in the backend.  
  - Created a user model using MongoDB schemas.  
  - Implemented a user controller to handle user-related requests.  
- Configured Multer for file uploads, allowing users to upload images.  
- Updated the project repository with these features and documented them in the README.  

### Milestone 5: Creating the Signup Page
- Built the signup page where users can register with:  
  - Full name  
  - Email  
  - Password  
- Implemented form validation:  
  - Proper email format  
  - Strong password validation  
  - Matching password confirmation  
- **Next Steps**: Connecting frontend with backend for authentication.  

### Milestone 6: Connecting Frontend with Backend & User Sessions
- Integrated signup and login pages with backend APIs using Axios.  
- Implemented JWT-based authentication to securely store and manage user sessions.  
- Used localStorage and Context API to maintain login state across sessions.  
- Created protected routes to restrict unauthorized access.  
- Implemented role-based access control (e.g., Admin vs. Regular Users).  

### Milestone 7: User Login API with Secure Authentication
- Created a login API endpoint (`POST /api/auth/login`).  
- Retrieved user data from the database based on the provided email.  
- Validated user credentials:  
  - Used bcrypt to compare entered password with the stored hashed password.  
  - If the password matches, authentication is successful.  
  - If not, an error message is returned.  
- Implemented JWT token generation for secure authentication.  
- Tested the API using Postman and Thunder Client.  

### Milestone 8: Product Cards and Homepage Layout
- Designed and built a **reusable product card component** that accepts product details via props.
- Created a **responsive homepage layout** using Tailwind CSS grid to display multiple cards efficiently across different screen sizes.
- Used mock product data to dynamically generate product cards.

### Milestone 9: Create Product Form
- Built a frontend **Create Product Form** to take product details as input.
- Implemented an image upload feature allowing multiple image selection.
- Ensured the form is responsive and user-friendly using Tailwind CSS.
- **Next Steps**: Connecting form submissions with backend API.

### Milestone 10: Writing Mongoose Schema & API Endpoint
- Created a **Mongoose schema** for storing product details in MongoDB.
- Defined fields like name, description, price, images, and category with proper validation.
- Built a **POST endpoint** to receive and validate product data before storing it in MongoDB.
- Ensured data integrity by implementing validation checks.
- **Next Steps**: Connecting frontend product form with the backend API.

