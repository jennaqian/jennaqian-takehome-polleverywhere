const express = require("express")
const raffles = express.Router()
const {getAllRaffles, getARaffle, } = require("../queries/raffles.js")

raffles.get("/", async (req,res) => {
  try {
    const allRaffles = await getAllRaffles();
    res.status(200).json(allRaffles);
  } catch (error) {
    res.status(500).json({error: "server error"})
  }  
});




raffles.get("/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const raffle = await getARaffle(id)
    res.status(200).json(raffle)
  } catch (error) {
    res.status(500).json({error: "server error"})
  }
})

module.exports = raffles;