# NPrintx
<p align="center"><img src="frontend/src/components/landing/images/banner-0.png" /></p>

Welcome to Nprintx, a uniquely styled e-commerce website that offers custom merchandise and collectibles. With Nprintx, customers can order personalized products from the comfort of their homes in anywhere Nigeria.

This project was originally developed as the my final portfolio project for the ALX-Holberton Software Engineering program.

## Table of Contents
[Introduction]()
[Features]()
[Technologies]()
[Installation]()
[Usage]()
[API Endpoints]()
[Database Schema]()
[Screenshots]()
[Contributing]()
[License]()

## Introduction
Nprintx is an online platform that allows users to explore a wide range of customizable products. Users can choose from various categories such as T-shirts, Hats/Caps, Sweatshirts, Drinkware, Bags, and many more. The website provides an intuitive and user-friendly interface for designing and ordering personalized products.

## Features
- User Authentication: Users can create accounts, log in, and manage their profiles.
- Product Categories: Customers can browse products in different categories and view product details.
- Customization Panel: A dynamic customization panel allows users to create unique designs for their products.
- Shopping Cart: Users can add products to their cart, review the order, and proceed to checkout.
- Payment Integration: Secure payment processing with Paystack integration.
- Order Tracking: Customers can track their orders and view order history.
- User Reviews: Users can leave reviews and ratings for products.
- Admin Panel: An admin dashboard for managing products, orders, and user reviews.

## Technologies
- Frontend: React, Redux, Axios, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Payment Integration: Paystack
- Media Management: Cloudinary

## Installation
To run the Nprintx application locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/nprintx.git
cd nprintx
```

2. Install dependencies for the frontend and backend:
```
cd frontend
npm install

cd ../backend
npm install
```

3. Configure Environment Variables: <br />
Rename ```config.env.example``` to ```config.env``` and provide the necessary values.

4. Run the application:
```
npm run dev

cd frontend
npm start
```

5. Open your browser and go to http://localhost:3000 to access the Nprintx website.

## Usage
- Register an account or log in if you already have one.
- Browse product categories and select a product to customize.
- Use the dynamic customization panel to create your personalized design.
- Add the customized product to your cart.
- Review your cart, proceed to checkout, and make a secure payment using Paystack.
- Track your order status and view your order history.
- Leave product reviews and ratings to help others make informed choices.

## API Endpoints
- /api/users: User authentication and profile management endpoints.
- /api/products: Product creation, listing, and retrieval endpoints.
- /api/orders: Order creation, listing, and retrieval endpoints.

## Database Schema
The MongoDB database for Nprintx contains three main collections:

- users: Stores user information, including name, email, password, role, and profile avatar.
- products: Contains details of the products, including name, price, description, ratings, images, templates, category, and subcategory.
- orders: Stores information about customer orders, including shipping details, order items, payment information, and order status.
The database schema is implemented using Mongoose, the MongoDB object modelling tool.

## Screenshots


## Contributing
I am always welcoming contributions from the community! If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch: ```git checkout -b feature/YourFeature```.
3. Commit your changes: ```git commit -m 'Add some feature```.
4. Push to the branch: ```git push origin feature/YourFeature```.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.