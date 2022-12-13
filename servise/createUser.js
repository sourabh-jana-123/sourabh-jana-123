const userModel = require('../model/user');

async function createUser(name, email, password) {
    const newUser = new userModel({
        name: name,
        email: email,
        password: password
    })

    await newUser.save();
}

module.exports = createUser