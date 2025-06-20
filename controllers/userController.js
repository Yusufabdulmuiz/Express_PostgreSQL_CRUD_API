const pool = require("../db");

// GET /api/users
exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(" Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// GET /api/users/:id
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID parameter" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(" Error fetching user by ID:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// POST /api/users
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, email, and age are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(" Error creating user:", error.message);
    res.status(500).json({ error: "Failed to create user" });
  }
};
