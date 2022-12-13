module.exports = {
    get: (req, res) => {
        res.render('register')
    },
    post: (req, res) => {
        const userName = req.body.email;
        res.render('login')
    }
}