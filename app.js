const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//  Catch unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

//  Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
