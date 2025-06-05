# link-shortener
A minimal, backend-powered URL shortening service which may be used for beautification, tracking clicks or disguising original address.

Built using **Node.js, Express, EJS, and MongoDB**. The frontend is kept intentionally simple to focus on core backend learning.

## 🌐 Live Demo

[Coming Soon / To be deployed]

##Features:
- Generates a unique 8 character string via nanoid package.
- String along with original url stored in mongodb model url.
- Also, for each url, click count is tracked along with visit history (extendable to analytics).
- Uses EJS for Server Side Rendering of Service Page.
- clean modular project

##Project Structure
├── controllers/
│ ├── homeController.js
│ └── urlController.js
├── models/
│ └── urlModel.js
├── routes/
│ ├── homeRouter.js
│ └── urlRouter.js
├── views/
│ ├── home.ejs
│ └── partials/
│ └── navbar.ejs
├── public/
│ └── css/
│ └── style.css
├── index.js
├── .env
└── README.md

## 🧠 What I Learned

- Setting up Express.js routes and controllers cleanly
- Building reusable EJS views with conditionals
- Handling POST requests and form submissions
- Connecting Node.js to MongoDB with Mongoose
- Using `nanoid` to generate short IDs
- Separating concerns between router → controller → model
- Returning data both via `res.json()` and `res.render()`
- Using middleware like `express.urlencoded()` for parsing form data
- Building a project without frontend JavaScript to understand server-side rendering deeply


##Future Improvements
Future Improvements
-Add visit statistics (click count, geo, timestamp)
-Authentication for managing user links
-Expiry for short links
-Copy-to-clipboard button (requires frontend JS)
-Deploy to cloud 

##Steps To Use:
1. Clone the Repository
2. Install dependencies
3. Run the server
4. Visit the home address using right HOST and PORT
