const pool = require("../db");

exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, email and age are required" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
      [name, email, age, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};
