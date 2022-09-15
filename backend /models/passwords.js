const passwordValidator = require('password-validator');

/* Data schema for passwords
   Schéma de données pour les mots  de passe */
const passwordSchema = new passwordValidator();
passwordSchema
.is().min(3)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100                         
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

module.exports = passwordSchema;