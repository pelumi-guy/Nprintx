const mongoose = require("mongoose");

const tShirt = [
  "Short Sleeve T-shirts",
  "Long Sleeve T-shirts",
  "Women's T-shirts",
  "Kids T-shirts",
  "Tie-Dye T-shirts",
];
const tanks = ["Gym wears", "Vests", "Women's Tank Tops"];
const hats = ["Face Caps", "Bucket Hats", "Beanies", "Visors", "Headbands"];
const sweatshirts = ["Hoodies", "Varsity Jackets", "Pullovers", "Joggers"];
const poloshirts = [
  "Golf Polo Shirts",
  "Long Sleeve Polo Shirts",
  "Women's Polo Shirts",
];
const drinkware = ["Water Bottles", "Mugs", "Plastic Cups", "Bottle Openers"];
const bags = [
  "Tote Bags",
  "Backpacks",
  "Drawstring Bags",
  "Pouches",
  "Fanny Packs",
  "Lunch Bags",
];
const signsAndBanners = ["Banners", "Tablecloths", "Stickers & Magnets"];
const accessories = ["Umbrellas", "Hand Fans", "Scarves", "Key Holders"];

// const getEnum = (category) => {
//   console.log("fired enum func");
//   switch (category) {
//     case "T-shirts":
//       return {
//         values: [
//           "Short Sleeve T-shirts",
//           "Long Sleeve T-shirts",
//           "Women's T-shirts",
//           "Kids T-shirts",
//           "Tie-Dye T-shirts",
//         ],
//         default: "Short Sleeve T-shirts",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Hats/Caps":
//       return {
//         values: ["Face Caps", "Bucket Hats", "Beanies", "Visors", "Headbands"],
//         default: "Face Caps",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Sweatshirts":
//       return {
//         values: ["Hoodies", "Varsity Jackets", "Pullovers", "Joggers"],
//         default: "Hoodies",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Poloshirts":
//       return {
//         values: [
//           "Golf Polo Shirts",
//           "Long Sleeve Polo Shirts",
//           "Women's Polo Shirts",
//         ],
//         default: "Golf Polo Shirts",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Drinkwares":
//       return {
//         values: ["Water Bottles", "Mugs", "Plastic Cups", "Bottle Openers"],
//         default: "Water Bottles",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Bags":
//       return {
//         values: [
//           "Tote Bags",
//           "Backpacks",
//           "Drawstring Bags",
//           "Pouches",
//           "Fanny Packs",
//           "Lunch Bags",
//         ],
//         default: "Tote Bags",
//         message: `Please select a subcategory of ${category}`,
//       };
//     case "Signs and Banners":
//       return {
//         values: ["Banners", "Tablecloths", "Stickers & Magnets"],
//         default: "Banners",
//         message: `Please select a subcategory of ${category}`,
//       };
//     default:
//       return;
//   }
// };

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
  ratings: {
    type: Number,
    default: 0,
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
  template: {
    front: {
      public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true},
    },
    back: {
      public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true},
    }
  },
  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: [
        "T-shirts",
        "Tank Tops and Sleeveless",
        "Sweatshirts",
        "Hats and Caps",
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
        // "Short Sleeve T-shirts",
        // "Long Sleeve T-shirts",
        // "Women's T-shirts",
        // "Kids T-shirts",
        // "Tie-Dye T-shirts",
        // "Face Caps",
        // "Bucket Hats",
        // "Beanies",
        // "Visors",
        // "Headbands",
        // "Hoodies",
        // "Varsity Jackets",
        // "Pullovers",
        // "Joggers",
        // "Golf Polo Shirts",
        // "Long Sleeve Polo Shirts",
        // "Women's Polo Shirts",
        // "Water Bottles",
        // "Mugs",
        // "Plastic Cups",
        // "Bottle Openers",
        // "Tote Bags",
        // "Backpacks",
        // "Drawstring Bags",
        // "Pouches",
        // "Fanny Packs",
        // "Lunch Bags",
        // "Banners",
        // "Tablecloths",
        // "Stickers & Magnets",
        ...tShirt,
        ...tanks,
        ...hats,
        ...sweatshirts,
        ...poloshirts,
        ...drinkware,
        ...bags,
        ...signsAndBanners,
        ...accessories
      ],
    },
  },
  // seller: {
  //   type: String,
  //   required: [true, "Please enter product seller"],
  // },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// productSchema.set('validateBeforeSave', false);

module.exports = mongoose.model("Product", productSchema);
