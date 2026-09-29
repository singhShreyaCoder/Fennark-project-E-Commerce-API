import express from "express";
import productRoute from "../src/routes/productRoute.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

app.use("/api/product", productRoute);

connectDB();
app.listen(5000, () => {
  console.log("Server started on port(5000)");
});
