const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  qtyPerUnit: Number,
  unitPrice: Number,
  unitInStock: Number,
  discontinued: Boolean,
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"category"
  }
  // categoryId: String
});

const categorySchema = new mongoose.Schema({
  categoryId: String,
  categoryName: String,
});

const Category = mongoose.model("category", categorySchema);
const Product = mongoose.model("product", productSchema);
// module.exports = mongoose.model("category", categorySchema);
// module.exports = mongoose.model("product", productSchema);
module.exports = {Product,Category};