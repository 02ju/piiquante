const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// IMPORTATION ROUTES
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
// FIN IMPORTATIONS
const path = require('path');
const helmet = require("helmet");
require('dotenv').config();

app.use(cors());

 // HELMET Protège l'app en paramétrant des Headers (notamment contre les failles XSS)
 app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//Connection mongoDb avec mongoose 
mongoose.connect(`mongodb+srv://Emine33:neler33@cluster0.kkieqv3.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


 

//Erreur cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// BODYPARSER
app.use(express.json());

// ROUTES
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;


