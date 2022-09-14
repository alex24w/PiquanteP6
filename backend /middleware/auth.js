const jwt = require('jsonwebtoken');

/* Protects the selected routes and allows to check if the user is authenticated before authorizing the sending of his requests
   Protége les routes sélectionnées et permet de vérifier si l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};