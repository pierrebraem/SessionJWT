const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();const SQLiteStore = require('connect-sqlite3')(session);

const sqlLite = new SQLiteStore({
    db: 'sessions.sqlite',
    dir: './storesession'
});

const app = express();
const port = process.env.PORT;

const maxAge =  3 * 24 * 60 * 60;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
}));
app.use(session({
    store: sqlLite,
    secret: 'fZsX3EA9e',
    name: "session",
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'lax',
        maxAge: maxAge
    }
}))

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const userRoute = require('./routes/user');

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`App running on ${port}`);
});