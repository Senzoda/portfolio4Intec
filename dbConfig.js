//on aura besoin de mysql afin d'accéder à ma base de données locale de localhost

const mysql= require('mysql2'); // après avoir installé mysql2 (npm i mysql2) je fais un require pour récup le module mysql de npm.

require('dotenv').config(); // je v rechercher le fichier '.env' pour pouvoir récupérer les données de confirguration.


//création d'une classe avec une variable statique qui permettra la connexion avec la DB.
//je rends ensuite cette classe exportable.

class DbConfig {
    static connect = mysql.createPool({
        host: process.env.DBHOST, //host représente ma machine (localHost)
        database: process.env.DBNAME, // databse = nom du user qui accède a ma db
        user:process.env.DBUSER,// user = utilisateur qui a accès a ma db
        password:process.env.DBPASSWORD// password = mot de passe du user
    })
}

module.exports = DbConfig;