const databaseWrapper = require('../database/databaseWrapper');

const add = async (req, res) => {
  try {
    const { data } = req.body;
    const dataToSend = [];
    for (let i = 0; i < data.length; i++) {
      const team = data[i];
      if (
        !team.ageGroup ||
        !team.player ||
        !team.paymentMethod ||
        !team.playerPartner
      ) {
        return res.status(400).send({ message: 'required data not filled' });
      } else {
        //check whether a valid object id
        if (
          databaseWrapper.isValidObjectId(team.player) &&
          databaseWrapper.isValidObjectId(team.playerPartner)
        ) {
          //check whether all the fields are valid
          const validateArray = Object.keys(team).filter((field) => {
            return !databaseWrapper.getAllFields('double').includes(field);
          });
          if (validateArray.length !== 0) {
            return res
              .status(400)
              .send({ message: 'Invalid field for schema -> Single' });
          }
          //check whether the player has registered
          const player = await databaseWrapper.read(
            'player',
            res,
            ['_id'],
            [team.player]
          );
          const playerPartner = await databaseWrapper.read(
            'player',
            res,
            ['_id'],
            [team.playerPartner]
          );
          if (
            player.data == null ||
            player.data.length == 0 ||
            playerPartner.data == null ||
            playerPartner.data.length == 0
          ) {
            return res.status(400).send({
              message: 'Invalid Player IDs. Register as a player first',
            });
          }

          if (team.paymentApprover) {
            const paymentApprover = await databaseWrapper.read(
              'user',
              res,
              ['_id'],
              [team.paymentApprover]
            );

            if (
              paymentApprover.data == null ||
              paymentApprover.data.length == 0
            ) {
              return res.status(400).send({
                message: 'Invalid Payment approver IDs.',
              });
            }
          }
          //create the single and update the player's performance
          const teamData = {
            ageGroup: team.ageGroup,
            matchType:
              player.data[0].gender == 'Male' &&
              playerPartner.data[0].gender == 'Male'
                ? team.ageGroup !== 'University' && team.ageGroup !== 'Staff'
                  ? 'Boys'
                  : 'Men'
                : player.data[0].gender == 'Female' &&
                  playerPartner.data[0].gender == 'Female'
                ? team.ageGroup !== 'University' && team.ageGroup !== 'Staff'
                  ? 'Girls'
                  : 'Women'
                : 'Mix',
            player: team.player,
            playerPartner: team.playerPartner,
            paymentMethod: team.paymentMethod,
            paymentSlip: team.paymentSlip != null ? team.paymentSlip : 'N/A',
          };
          if (team.paymentConfirmed) {
            teamData['paymentSlip'] = team.paymentConfirmed;
          }

          if (team.paymentApprover) {
            teamData['paymentApprover'] = team.paymentApprover;
          }

          dataToSend.push(teamData);
        } else {
          return res.status(400).send({ message: 'Invalid Player ID' });
        }
      }
    }
    return await databaseWrapper.add('double', dataToSend, res);
  } catch (error) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

const getAll = async (req, res) => {
  const result = await databaseWrapper.readDoubles('double', res);
  return res.status(201).send({ message: result.message, data: result.data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.remove('double', field, value, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const update = async (req, res) => {
  try {
    const { field, value, data } = req?.body;

    if (!field || !value || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    const validateArray = Object.keys(data).filter((field) => {
      return !databaseWrapper.getAllFields('double').includes(field);
    });
    if (validateArray.length != 0) {
      return res
        .status(400)
        .send({ message: 'Invalid field for schema -> double' });
    }
    return await databaseWrapper.update('double', field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

module.exports = {
  add,
  getAll,
  deleteByField,
  update,
};
