const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: [
        "T-shirts",
        "Tank Tops/Sleeveless",
        "Sweatshirts",
        "Hats/Caps",
        "Poloshirts",
        "Drinkware",
        "Bags",
        "Signs and Banners",
        "Accessories",
        "Framed photographs",
      ],
      message: "Please select correct product category",
    },
  },
  subcategory: {
    type: String,
    // required: [true, "Please select subcategory for this product"],
    enum: {
      values: [
        "Short Sleeve T-shirts",
        "Long Sleeve T-shirts",
        "Women's T-shirts",
        "Kids T-shirts",
        "Tie-Dye T-shirts",
        "Face Caps",
        "Bucket Hats",
        "Beanies",
        "Visors",
        "Headbands",
        "Hoodies",
        "Varsity Jackets",
        "Pullovers",
        "Joggers",
        "Golf Polo Shirts",
        "Long Sleeve Polo Shirts",
        "Women's Polo Shirts",
        "Water Bottles",
        "Mugs",
        "Plastic Cups",
        "Bottle Openers",
        "Tote Bags",
        "Backpacks",
        "Drawstring Bags",
        "Pouches",
        "Fanny Packs",
        "Lunch Bags",
        "Banners",
        "Tablecloths",
        "Stickers & Magnets",
      ],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// productSchema.set('validateBeforeSave', false);

module.exports = mongoose.model("Product", productSchema);
