const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


/* Connecting to MongoDB database
   Connexion à la base de donnée MongoDB */

mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/* Launch of the Express framework
   Lancement du framework Express */

const app = express();


/* Middleware CORS - Adding headers to the "response" object
                     Ajout de headers à l'objet "response" */

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next();
  });


/* Package body-parser */
app.use(bodyParser.json());

/* static "images" folder
   Rendre le dossier "images" statique */

app.use('/images', express.static(path.join(__dirname, 'images')));

/* Roads in the app
   Enregistrement des routes dans l'application */
   
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;