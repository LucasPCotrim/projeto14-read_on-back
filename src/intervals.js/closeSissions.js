import db from '../database/mongodb.js';

async function closeSessions (HOUR){

    const timeSession = Date.now() - (HOUR * 2);
    try {
        await db
            .collection("sessions")
            .deleteMany({ timeLogin: { $lte: timeSession } });
    }catch (error) {
    console.error(error.message);
    }
}

export default closeSessions;