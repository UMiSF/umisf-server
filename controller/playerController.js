const databaseWrapper = require('../database/databaseWrapper');

const addPlayer = async (req,res) => {
    const {playerData} = req.body;

    for (let i = 0; i < playerData.length; i++) {
        const player = playerData[i];
        if(!player.firstName || !player.lastName || 
            !player.institute || !player.performanceThreshold || 
            !player.gender || !player.contactNumber || !player.photo){
                return res.status(400).send({message: 'required data not filled'});
            }
    }

    return databaseWrapper.add('player', playerData);
}