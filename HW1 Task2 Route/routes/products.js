const express = require("express");
const router = express.Router();
const data = require("../data");
let products = data.products;

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

//Middleware to check if product with given ID exists
let currentProduct = null;

const checkProductId = (req, res, next) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  currentProduct = product;
  if (!currentProduct) {
    res.status(404).json({
      message: "Product not found",
    });
  }
  next();
};

const checkStock = (req, res, next) => {
  const { stock } = req.body;
  if (stock < 1) {
    res.status(400).json({ message: "Product stock most be positive" });
  }
  next();
};
const checkPrice = (req, res, next) => {
  const { price } = req.body;
  if (price <= 0) {
    res
      .status(400)
      .json({ message: "Product price must be greater than zero" });
  }
  next();
};

// GET /api/products/:id
router.get("/:id", checkProductId, (req, res) => {
  if (currentProduct !== null) res.json(currentProduct);
});

// POST /api/products
router.post("/", checkStock, checkPrice, (req, res) => {
  const newProduct = req.body;
  if (products.find((p) => p.id === newProduct.id)) {
    res.status(400).json({ message: "Product with this ID already exists" });
  } else {
    res.status(201).json({ message: "Product created successfully" });
  }
  products.push(newProduct);
});

// PUT /api/products/:id
router.put("/:id", checkProductId, checkStock, checkPrice, (req, res) => {
  const updatedData = req.body;
  currentProduct.name = updatedData.name || currentProduct.name;
  currentProduct.price = updatedData.price || currentProduct.price;
  res.json({ message: `Product with ID: ${currentProduct.id} updated` });
});

// DELETE /api/products/:id
router.delete("/:id", checkProductId, (req, res) => {
  products = products.filter((p) => p.id !== currentProduct.id);
  res.json({ message: `Product with ID: ${currentProduct.id} deleted` });
});
module.exports = router;
