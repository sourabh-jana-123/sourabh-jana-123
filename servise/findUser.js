const bcrypt = require('bcrypt');
const userModel = require('../model/user');


async function findUser(email, password) {

    let user;
    let result;

    try {
        user = await userModel.findOne({
            email: email
        })
    } catch {
        console.error(err.message);
    }

    console.log(user);
    await bcrypt
        .compare(password, user.password)
        .then((res) => {
            console.log(res);
            result= res;
        })
        .catch(err => {
            console.error(err.message)
        })

    return result;
}

// async function validateUser(password, hash) {
//     return await bcrypt.compare(password, hash);    
// }

module.exports = findUser