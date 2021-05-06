const router = express.Router();
import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler"; // use as a replacmnt of try catch

//@desc Fetch all products
//@route get /api /products
//@access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
//@desc Fetch signle product
//@route get /api /products/:id
//@access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product =await  products.findById((p) => p.id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not Found" });
    }
  })
);
export default router;
