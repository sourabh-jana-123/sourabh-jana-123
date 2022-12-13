const express = require("express");
const bcrypt = require("bcrypt");
require('dotenv').config();
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');

const app = express();
const PORT = process.env.PORT || 3000;

const users = [];

app.set("view engine", 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.get('/', (req, res) => {
    res.redirect('/login');
})


app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.post('/register', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register');
    }
    console.log(users);
})

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});