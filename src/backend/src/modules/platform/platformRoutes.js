import express from "express";
import db from "../../config/db.js";

const router = express.Router();

router.get("/platform/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `SELECT * FROM Platform WHERE id = ${ id }`;

        db.get(sql, [id], (err, user) => {
            if (err) {
                res.status(500).json({ mensagem: "Error when searching for platform: " + err.message });
            } else if (!user) {
                res.status(404).json({ mensagem: "Platform not found" });
            } else {
                res.json(user);
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Platform not found: " + error.message });
    }
});

router.post("/platform", async (req, res) => {
    try {
        const { name } = req.body;

        const sql = `INSERT INTO Platform (name) VALUES (${ name })`;

        db.run(sql, [name], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Platform creating user: " + err.message });
            } else {
                res.status(201).json({ mensagem: "Platform created successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Platform not found: " + error.message });
    }
});

router.patch("/platform/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;


        const sql = `UPDATE Platform SET name = ${ name } WHERE id = ${ id }`;

        db.run(sql, [name, id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error updating platform: " + err.message });
            } else {
                res.json({ mensagem: "Platform updated successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "EPlatform updating user: " + error.message });
    }
});

router.delete("/platform/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `DELETE FROM Platform WHERE id = ${ id }`;

        db.run(sql, [id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error deleting platform" + err.message });
            } else {
                res.json({ mensagem: "Platform deleted successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Platform deleting user: " + error.message });
    }
});

export default router;