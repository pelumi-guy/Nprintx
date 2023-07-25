// import product data and mongoose
const products = require('../data/products.json');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/product.js');
const Order = require('../models/order');

const { connectDatabase } = require('../config/database.js');

// setup environment config
dotenv.config({ path: "../../config.env" })

// connect database
connectDatabase();

// seedproducts
const seedProducts = async () => {
    try {
        // await Product.deleteMany();
        // console.log("Products are deleted");

        // console.log({ products })

        // await Product.insertMany(products, {ordered: false});
        // await Product.create(products)
        // console.log("All products have been added");

        // console.log("All products: ", await Product.find());
        const uri = process.env.DB_LOCAL_URI;
        const conn = mongoose.createConnection(uri);
        // conn.dropCollection("orders", () => console.log("Order Collection removed"));
        await mongoose.connection.collections['orders'].drop();

        process.exit();
    } catch (error) {
        console.log(error.message)
        process.exit();
    }
}

seedProducts();