import express from "express";
import db from "../../config/db.js";

const router = express.Router();

router.get("/games/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `SELECT * FROM Game WHERE id = ${ id }`;

        db.get(sql, [id], (err, user) => {
            if (err) {
                res.status(500).json({ mensagem: "Error when searching for game: " + err.message });
            } else if (!user) {
                res.status(404).json({ mensagem: "Game not found" });
            } else {
                res.json(user);
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Game not found: " + error.message });
    }
});

router.post("/games", async (req, res) => {
    try {
        const { name, platform, first_category, second_category, status, rating } = req.body;

        const sql = `INSERT INTO Game (name, platform, first_category, second_category, status, rating) VALUES (${name}, ${platform}, ${first_category}, ${second_category}, ${status}, ${rating})`;

        db.run(sql, [name, platform, first_category, second_category, status, rating], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error creating game: " + err.message });
            } else {
                res.status(201).json({ mensagem: "Game created successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Game not found: " + error.message });
    }
});

router.patch("/games/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { platform, status, rating } = req.body;


        const sql = `UPDATE Game SET platform = ${ platform }, status = ${ status }, rating = ${ rating } WHERE id = ${ id }`;
        db.run(sql, [platform, status, rating, id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Error updating game: " + err.message });
            } else {
                res.json({ mensagem: "Game updated successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Game updating game: " + error.message });
    }
});

router.delete("/games/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = `DELETE FROM Game WHERE id = ${ id }`;
        
        db.run(sql, [id], function (err) {
            if (err) {
                res.status(500).json({ mensagem: "Game deleting game" + err.message });
            } else {
                res.json({ mensagem: "Game deleted successfully!" });
            }
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Game deleting game: " + error.message });
    }
});

export default router;