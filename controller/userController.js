const { has } = require('config');
const databaseWrapper = require('../database/databaseWrapper');
const helperUserArray = require('../helpers/helperUserArray');
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
  const { userData } = req.body;
var salt = bcrypt.genSaltSync(10);

  for (let i = 0; i < userData.length; i++) {
    let user = userData[i];
    if (!user.name || !user.email || !user.password || !user.role || !user.contactNumber) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    //check whether the user already registered
    const userExist = await databaseWrapper.read('user', res, ['email'], [user.email]);
    console.log('User exists: ', userExist);
    if (userExist.data?.length != 0) {
      return res.status(409).send({ message: 'This email is already used for a user' });
    }
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
    //console.log('Inside:', user);
  }
 // console.log('Outside:', JSON.stringify(userData));
  return await databaseWrapper.add('user', userData, res);
};

const getAllUsers = async (req, res) => {
  const result = await databaseWrapper.read('user', res);
  const data = helperUserArray.arrangeUserArray(result.data);
  res.status(201).send({ message: result.message, data: data });
};

const deleteByField = async (req, res) => {
  try {
    const { field, value } = req?.params;
    if (!field || !value) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    return await databaseWrapper.remove('user', field, value, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const updateUser = async (req, res) => {
  try {
    const { field, value, data } = req?.body;
    console.log(field, value, data);
    //todo: data should validate

    if (!field || !value || !data) {
      return res.status(400).send({ message: 'required data not filled' });
    }
    console.log('here');
    return await databaseWrapper.update('user', field, value, data, res);
  } catch (e) {
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
};

const loginUser = async (req, res) => {
  try{
    const {email, password, role} = req?.body
    const user = await databaseWrapper.read('user', res, ['email'], [email]);
    
    if (user.data?.length === 0){
      return res.status(400).send({ message: 'Email is not valid.' });
    }

    if (! user.data[0].role.includes(role)){
      return res.status(400).send({ message: "This user currently does n't have rights for the selected role." });
    }

    bcrypt.compare(password, user.data[0].password, function(err, result){
      if(result){
        return res.status(201).send({ message: 'Successfully Logged in', data: user.data[0]});
      }else{
        return res.status(400).send({ message: 'Password is wrong. Please check again.'});
      }
    })
  }catch(e){
    return res.status(400).send({ message: 'Bad Request', error: e });
  }
}

// const getUserByObjectId = async (req, res) => {

//   let { ids} = req?.query;
//  // console.log("IDs: ", ids)
//   ids = ids?.split(',')
//   //console.log("IDs: ", ids)
// //  //check whether valid object ids
//   const validations = ids.filter((value)=> {return databaseWrapper.isValidObjectId(value) == false})
//   if (validations.length === 0) {

//     const user = await databaseWrapper.read("user", res, ['_id'], [ids]);
//     if (user.data == null || user.data.length == 0) {
//       return res.status(400).send({ message:"Invalid User ID. Register as a user first"});
//     } else {
//       return res.status(201).send({ message: user.message, data: user.data });
//     }
//   } else {
//     return res.status(400).send({ message:"Invalid ID included "});
//   }
// };

module.exports = {
  addUser,
  getAllUsers,
  deleteByField,
  updateUser,
  loginUser
};
