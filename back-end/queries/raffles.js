const db = require("../db/dbConfig.js");

const getAllRaffles = async () => {
  try {
    const allRaffles = await db.any("SELECT * FROM raffles ORDER BY date_created DESC");
    return allRaffles;
  } catch (error) {
    return error;
  }
};

const createRaffle = async (raffle) => {
  try {
    const newRaffle = await db.one(
      "INSERT INTO raffles (rname, secret_token) VALUES ($1, $2) RETURNING *",
      [raffle.rname, raffle.secret_token]
    );
    return newRaffle;
  } catch (error) {
    return error;
  }
};

const getARaffle = async (id) => {
  try {
    const aRaffle = await db.one("SELECT * FROM raffles WHERE id=$1", id);
    return aRaffle;
  } catch (error) {
    return error;
  }
};

const getAllParticpants = async (raffle_id)=> {
  try {
    const allParticipants = await db.any("SELECT * FROM participants WHERE raffleid=$1 ORDER BY date_created DESC",raffle_id)
    return allParticipants;
  } catch (error) {
    return error;
  }
}

const createParticipant = async (body, raffleid) => {
  try {
    const newParticipant = await db.one(
      "INSERT INTO participants (fname, lname, email, raffleid, phone) VALUES ($1,$2,$3,$4,$5) RETURNING *", 
      [body.fname, body.lname, body.email, raffleid, body.phone])
    return newParticipant;
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllRaffles,
  getARaffle,
  createRaffle,
  getAllParticpants,
  createParticipant,
};
