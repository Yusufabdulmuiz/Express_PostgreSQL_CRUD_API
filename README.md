# My Final Mini Project For 3MTT 
# Express + Supabase PostgreSQL CRUD API

This project is a RESTful API built using Node.js, Express.js, and PostgreSQL (hosted via Supabase). It supports basic CRUD operations for managing users.

---

## Technologies Used

- Node.js
- Express
- PostgreSQL (via Supabase)
- dotenv
- nodemon
- pg

---

## Table Structure

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  age INT
);
