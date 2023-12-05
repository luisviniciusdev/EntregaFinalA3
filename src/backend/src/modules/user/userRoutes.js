import express from "express";
import db from "../../config/db.js";

const router = express.Router();

router.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `SELECT * FROM User WHERE id = ?`; // Use placeholders para evitar SQL Injection

        db.get(sql, [id], (err, user) => {
            if (err) {
                res.status(500).json({ mensagem: "Erro ao buscar o usuário: " + err.message });
            } else if (!user) {
                res.status(404).json({ mensagem: "Usuário não encontrado" });
            } else {
                res.json(user);
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar o usuário: " + error.message });
    }
});


router.post("/users", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const sql = `INSERT INTO User (username, email, password) VALUES (${username}, ${email}, ${password})`;

        db.run(sql, [username, email, password], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error creating user: " + err.message });
            } else {
                res.status(201).json({ mensagem: "User created successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "User not found: " + error.message });
    }
});

router.patch("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;


        const sql = `UPDATE User SET username = ${username}, email = ${email}, password = ${password} WHERE id = ${id}`;
        db.run(sql, [username, email, password, id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error updating user: " + err.message });
            } else {
                res.json({ mensagem: "User updated successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Error updating user: " + error.message });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `DELETE FROM User WHERE id = ${id}`;

        db.run(sql, [id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error deleting user" + err.message });
            } else {
                res.json({ mensagem: "User deleted successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Error deleting user: " + error.message });
    }
});

export default router;
