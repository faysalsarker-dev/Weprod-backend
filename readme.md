# Weprod Backend

## Client-Side Repository
The client-side code for this project can be found here: [WeProd Client](https://github.com/faysalsarker-dev/WeProd).

## About
The backend of Weprod powers a Fullstack functionality-based Single Page Application (SPA) that allows users to search, filter, categorize, and sort products. The server efficiently handles requests for pagination, searching, categorization, sorting, and authentication, ensuring a smooth and responsive user experience.

## Features

### 1. Pagination
- **Efficient Data Handling:** The server loads products in pages to optimize performance.
- **API Endpoints:** Supports pagination endpoints that deliver data in chunks for the frontend.

### 2. Searching
- **Search API:** Enables users to search for products based on the product name.
- **Optimized Queries:** Implements efficient search queries to return accurate results quickly.

### 3. Categorization
- **Category-Based Filtering:** Allows filtering products by:
  - **Brand Name**
  - **Category Name**
  - **Price Range**
- **Combination Filters:** Users can combine filters for more specific results.

### 4. Sorting
- **Sorting API:** Allows sorting products by price, either from Low to High or High to Low.

### 5. Authentication
- **Google Authentication:** Integrated using Firebase.
- **Email and Password Authentication:** Integrated using Firebase.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.
- MongoDB or another database set up for storing product data.
- Firebase account setup for authentication.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/faysalsarker-dev/Weprod-backend.git
    cd Weprod-backend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add your database connection string and Firebase configuration details.

4. Run the server:
    ```bash
    npm start
    ```

### API Documentation
The API provides endpoints for handling all the functionalities, including:
- **/api/products:** Handles product listing with pagination, searching, categorization, and sorting.
- **/api/auth:** Handles user authentication via Firebase.

### Running Locally

1. Ensure your MongoDB instance is running and the database is properly configured.
2. Start the server using the command:
    ```bash
    npm start
    ```

3. The server will run on `http://localhost:5000` by default. You can configure the port in the `.env` file if needed.

## Client-Side Integration
The backend is designed to work seamlessly with the frontend available in the [WeProd Client Repository](https://github.com/faysalsarker-dev/WeProd).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.
