const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
