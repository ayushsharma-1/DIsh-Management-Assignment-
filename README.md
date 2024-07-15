# Dish Management System

This project is a Dish Management System with a frontend built using React and a backend using Node.js and Express and database using MongoDB.

## Folder Structure
├── client/
│ ├── node_modules/
│ ├── public/
│ │ ├── index.html
│ └── src/
│ ├── assets/
│ │ ├── 1.jpg
│ │ ├── 2.jpg
│ │ └── 3.jpg
│ ├── components/
│ │ ├── DishCard.css
│ │ ├── DishCard.js
│ │ ├── DishList.js
│ │ ├── RealTimeUpdate.js
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ ├── WelcomeSlider.js
│ ├── WelcomeSlider.css
├── server/
│ ├── controllers/
│ │ ├── dishController.js
│ ├── models/
│ │ ├── dishModel.js
│ ├── routes/
│ │ ├── dishRoutes.js
│ ├── seed/
│ │ ├── seedData.js
│ ├── node_modules/
│ ├── .env
│ ├── package-lock.json
│ ├── package.json
│ ├── server.js
├── .gitignore
├── README.md

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm or yarn

### Setup

1. Clone the repository
    ```sh
    git clone https://github.com/yourusername/dish-management-system.git
    cd dish-management-system
    ```

2. Install dependencies for both client and server
    ```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `server` directory and add the necessary environment variables (e.g., database connection string).

4. Seed the database (if necessary)
    ```sh
    cd server
    node seed/seedData.js
    ```

### Running the Application

1. Start the server
    ```sh
    cd server
    npm start
    ```

2. Start the client
    ```sh
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

### Project Structure

#### Client

- `public/`: Contains the `index.html` file.
- `src/`: Contains the React components and other assets.
  - `assets/`: Contains the images used in the application.
  - `components/`: Contains the React components such as `DishCard`, `DishList`, `RealTimeUpdate`, etc.
  - `App.js`: Main component of the React application.
  - `index.js`: Entry point of the React application.

#### Server

- `controllers/`: Contains the controller files for handling requests.
- `models/`: Contains the Mongoose models for the database.
- `routes/`: Contains the route files for the application.
- `seed/`: Contains the script for seeding the database.
- `server.js`: Entry point of the Node.js application.

