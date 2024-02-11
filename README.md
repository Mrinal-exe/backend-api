#Backend API

**Overview:**
This documentation covers the [Project Name] project, a Node.js application using Express, MongoDB with Mongoose, and bcrypt for password hashing. It facilitates user signup, login, and user data retrieval.

**Table of Contents:**
1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Dependencies](#dependencies)
5. [Configuration](#configuration)
6. [Routes](#routes)
7. [Models](#models)
8. [Contributing](#contributing)
9. [License](#license)

**Installation:**
1. **Clone Repository:**
```
git clone github.com/Mrinal-exe/backend-api
```

2. **Install Dependencies:**
```
npm install
```

3. **Configure MongoDB:**
- Ensure MongoDB is installed and running.
- Check configuration in `config/mongo.js`.

4. **Run the Application:**
```
npm start
```

**Usage:**
- The application exposes API endpoints for user-related operations.
- Use tools like Postman or curl for testing.

**Project Structure:**
- **`index.js`**: Entry point.
- **`config/mongo.js`**: MongoDB configuration.
- **`model/user_model.js`**: User model definition.
- **`routes/routes.js`**: Express router for API routes.

**Dependencies:**
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

**Configuration:**
- Make a new file and name it `.env` and define `PORT` and `URI`.
- Set the MongoDB connection URL and Post.

**Routes:**
1. **GET `/`**
- Fetches all users from the database.

2. **POST `/signup`**
- Registers a new user by hashing the password and saving to the database.

3. **POST `/login`**
- Authenticates a user by comparing the provided password with the hashed password.

**Models:**
- **User Model (`model/user_model.js`):**
- Defines the structure of the user schema.



