const playerSchema = require('../models/player');

const add = async (collectionName,data) => {
    if(collectionName === 'player'){
        try{
            const dbResponse = await playerSchema.create(data);
            res.status(201).send({ message: 'New Player Data has been added', data: dbResponse});
        }catch(e){
            res.status(400).send({message: 'Server error', error: e});
        }
    }
}

module.exports = {
    add
}