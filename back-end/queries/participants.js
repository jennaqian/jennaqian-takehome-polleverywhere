const db = require("../db/dbConfig.js");

const getAllParticpants = async () => {
    try {
        const participants = await db.any("SELECT * FROM participants")
        return participants;
    } catch (error) {
        return error 
    }
}

module.exports = {
    getAllParticpants,

}