const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const path = require('path');

const app = express()

const userRoutes = require('./routes/user.js');
//const saucesRoutes = require('./routes/sauces.js'); 

app.use(cors());
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Emine33:neler33@cluster0.kkieqv3.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
//app.use('/api/sauces', saucesRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/auth', userRoutes);



module.exports = app;