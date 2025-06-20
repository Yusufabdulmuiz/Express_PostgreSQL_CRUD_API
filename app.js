const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Express + PostgreSQL API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
