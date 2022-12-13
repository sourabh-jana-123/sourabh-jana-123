const findUser = require('../servise/findUser');

module.exports = {
    get: (req, res) => {
        res.render('login')
    },
    post: async function (req, res) {
        let message = '';
        const email = req.body.email;
        const password = req.body.password;
        let isValid = false;
    
        isValid = await findUser(email, password)
       
        // console.log('isValid', isValid);

        if(isValid){
            message = `Hello, ${email}`;
            res.render('index', { message })
        } else {
            // message = 'Please provide correct email and password'
            res.render('login')
        }
    }
}