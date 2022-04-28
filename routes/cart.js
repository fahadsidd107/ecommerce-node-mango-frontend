const router = require("express").Router();
const Cart = require("./../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE CART
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

// //UPDATE PRODUCT
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE PRODUCT
// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json("Product deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET PRODUCT
// router.get("/find/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL PRODUCTS
// router.get("/", async (req, res) => {
//   const Newquery = req.query.new;
//   const Categoryquery = req.query.category;
//   try {
// let products

//     if (Newquery) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(1);
//     }else if(Categoryquery){
//       products = await Product.find({categories:{$in:[Categoryquery]}});
//     }else{
//       products = await Product.find();
//     }
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;