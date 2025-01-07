## Create a course-selling app (skillminds-academy)

**STEPS**

- Initialise a new Node.js project (skillminds-academy)
- Install the following main and dev dependencies: `express`, `mongoose`, `jsonwebtoken`, `bcrypt`, `dotenv` & `nodemon`
- Create a config file for configuring secret variables using `dotenv`: JWT_SECRET, MONGODB_CONNECTION_STRING, HASH_SALT_ROUNDS
- Connect to MongoDB DB before starting the server.
- Define schema:
  - User: for storing user information such as: first name, last name, email, password and creator check.
  - Course: for storing course information such as: title, description, price, image, and creator id.
  - Purchase: for storing purchase details such as: course and user ids.
- Define models for the schema created above to perform queries on your collections.
- Using express routing, create endpoints required for signin, signup, courses (view, create, update, delete), view & purchase courses.
- Create middleware for authenticated endpoints.
- Test your route using Postman.
