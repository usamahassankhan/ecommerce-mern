// const express = require("express");
// const products = require("./data/products");
// const app = express();
// const dotenv = require("dotenv");

import express from "express";
// import products from "./data/products.js"; //,js is must
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// if u want to  convert require to import then  use
// "type":"module", in packg.json server
// and remode module.exports=products to export default products
connectDB();
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  // throw new Error("message not");
  res.send("api is running");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p.id === req.params.id);
//   res.json(product);
// });
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server runnning on ${PORT}`));
