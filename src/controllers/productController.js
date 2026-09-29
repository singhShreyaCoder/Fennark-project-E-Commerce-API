import product from "../models/product.js";

export async function getAllProducts(req, res) {
  try {
    const products = await product.find().sort({ createddAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.log("Error in getAllProducts controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getProductById(req, res) {
  try {
    const foundProduct = await product.findById(req.params.id);
    if (!foundProduct) res.status(404).json({ message: "Product not found" });
    res.status(200).json(foundProduct);
  } catch (error) {
    console.log("Error in getProductById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createProduct(req, res) {
  try {
    const { Name, Price, Category, Description, Stock, Image } = req.body;
    const newProduct = new product({
      Name: Name,
      Price: Price,
      Category: Category,
      Description: Description,
      Stock: Stock,
      Image: Image,
    });
    await newProduct.save();
    console.log("Product Created", newProduct);
    res.status(201).json({ message: "Product cretaed successfully" });
  } catch (error) {
    console.log("Error in createProduct controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateProduct(req, res) {
  try {
    const { Name, Price, Category, Description, Stock, Image } = req.body;
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      { Name, Price, Category, Description, Stock, Image },
      { returnDocument: "after" },
    );
    if (!updatedProduct) res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log("Error in updateProduct controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
