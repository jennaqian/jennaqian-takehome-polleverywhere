const express = require("express");
const participants = express.Router();
const { getAllParticpants } = require("../queries/participants");

participants.get("/", async (req,res) => {
    try {
        const allParticipants = await getAllParticpants();
        res.status(200).json(allParticipants)
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
})


module.exports = participants; 