const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-commerce Catalog API Running");
});

app.use("/api/products", productRoutes);

/* MongoDB connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch(err => console.log(err));

module.exports = app;