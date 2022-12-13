const createUser = require('../servise/createUser');
const bcrypt = require("bcrypt");

module.exports = {
    get: (req, res) => {
        res.render('register')
    },
    post: async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const hashPassword = await bcrypt.hash(password, 10);

        createUser(name, email, hashPassword);
        res.render('login')
    }
}