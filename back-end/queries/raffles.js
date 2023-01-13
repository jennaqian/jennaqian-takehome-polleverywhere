const db = require("../db/dbConfig.js")

const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles");
        return allRaffles;
    } catch (error) {
        return error 
    }
};



const getARaffle = async (id) => {
    try {
        const aRaffle = await db.one("SELECT * FROM raffles WHERE id=$1",id)
        return aRaffle;
    } catch (error) {
        return error
    }
};

module.exports = {
    getAllRaffles,
    getARaffle,
}