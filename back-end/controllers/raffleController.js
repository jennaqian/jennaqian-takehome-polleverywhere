const express = require("express");
const raffles = express.Router();
const {getAllRaffles, getARaffle, createRaffle, getAllParticpants } = require("../queries/raffles.js");

// const participantsController = require("./participantsController.js")
// raffles.use("/:raffleId/participants", participantsController)

raffles.get("/", async (req, res) => {
  try {
    const allRaffles = await getAllRaffles();
    res.status(200).json(allRaffles);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

raffles.post("/", async (req, res) => {
  try {
    const { body } = req;
    const newRaffle = await createRaffle(body);
    res.status(200).json(newRaffle);
  } catch (error) {
    res.status(500).json({ error: "raffle creation error" });
  }
});

raffles.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const raffle = await getARaffle(id);
    res.status(200).json(raffle);
  } catch (error) {
    res.status(500).json({ error: "raffle not found" });
  }
});

raffles.get("/:id/participants", async (req, res) => {
  try {
    const {id} = req.params;
    const participants = await getAllParticpants(id);
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({error: "server error"})
  }
})

module.exports = raffles;
