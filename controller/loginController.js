module.exports = {
    get: (req, res) => {
        res.render('login')
    },
    post: (req, res) => {
        const userName = req.body.email;
        res.render('index', { userName })
    }
}