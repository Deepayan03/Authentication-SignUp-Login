# Login Project - Node.js Backend for User Signup, Login, and Authentication
This project provides a Node.js backend solution for handling user signup, login, and authentication functionalities. It offers secure and reliable endpoints for user registration, authentication, and session management, allowing seamless integration with frontend applications.

Installation:
1. # Clone the repository:
   git clone https://github.com/Deepayan03/Authentication-SignUp-Login.git
   cd login-project

2. # Install dependencies using npm:
      npm install
3. # Set up environment variables:
       Create a .env file in the root directory.
       Add the following environment variables and set their values accordingly.
       PORT=<port_number>
       CLIENT_URL=<frontend_client_url>
       URL=<your_mongodb_connection_url>
       SECRET=<your_jwt_secret_key>
4. # Usage:
       Start the server: npm start
       The server will be running on the specified port (default: 5000) and is ready to handle user signup, login, and authentication requests.
# API Endpoints:
    POST /api/auth/signup: Create a new user account.
    POST /api/auth/signin: Authenticate and login a user.
    GET /api/auth/user: Retrieve user information (requires authentication).
    GET /api/auth/logout: Log out the authenticated user.

# Technologies Used
    Express.js: Web application framework for Node.js.
    Bcrypt: Password hashing for user security.
    Cookie-parser: Handling cookies for user sessions.
    Cors: Cross-Origin Resource Sharing for frontend integration.
    Dotenv: Load environment variables from .env file.
    Email-validator: Validate email addresses.
    Jsonwebtoken: Authentication and token-based user management.
    Mongoose: MongoDB object modeling for Node.js.
    Nodemon: Automatically restart the server during development.

# Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Contributions are always welcome!
Please follow the standard coding style and ensure all tests pass before submitting a pull request.

# Contact
For any inquiries or feedback, please contact:

# GitHub: 
      Deepayan03
# Email: 
      mukhopadhyaydeepayan@gmail.com
