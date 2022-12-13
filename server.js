const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Users')
}
main().catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.get('/', (req, res) => {
    res.redirect('/login');
})

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});