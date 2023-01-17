// const db = require("../db/dbConfig.js");

// const getAllParticpants = async (raffle_id) => {
//     try {
//         const allParticipants = await db.any("SELECT * FROM participants WHERE raffleid=$1",raffle_id)
//         return allParticipants;
//     } catch (error) {
//         return error 
//     }
// }

// const getParticipant = async (id) => {
//     try {
//         const participant = await db.one("SELECT * FROM participants where id=$1", id)
//     } catch (error) {
//         return error
//     }
// }

// module.exports = {
    // getAllParticpants,
    // getParticipant
// }