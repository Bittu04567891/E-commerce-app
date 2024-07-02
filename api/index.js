const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();
const path = require("path");

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
mongoose
  .connect(
    "mongodb+srv://sultanbittu775:Bittu@e-com.fca2vno.mongodb.net/?retryWrites=true&w=majority&appName=E-com"
  )
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => console.log(err));
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("DB connection successful");
//   })
//   .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server running");
});
