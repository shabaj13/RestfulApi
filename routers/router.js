const express = require("express");
const { Product, Category } = require("../models/modelSchema");
const router = new express.Router();

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const insertProduct = await product.save();
    res.status(201).json(insertProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    const getProducts = await Product.find({}).populate("categoryId");
    res.status(200).send(getProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/products/:name", async (req, res) => {
  try {
    const productName = req.params.name;
    const getProduct = await Product.findOne({ productName }).populate("categoryId");
    res.status(200).send(getProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

//For Category
router.post("/category", async (req, res) => {
  try {
    const category = new Category(req.body);
    const insertCategory = await category.save();
    res.status(201).json(insertCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/category", async (req, res) => {
  try {
    const getCategory = await Category.find({});
    res.status(200).send(getCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/category/:name", async (req, res) => {
  try {
    const categoryName = req.params.name;
    const getCategory = await Category.findOne({ categoryName });
    res.status(200).send(getCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/category/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCategory = await Category.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/category/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
