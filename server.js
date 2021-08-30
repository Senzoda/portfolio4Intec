//fichier nécessaire au lancement du serveur

const app = require('./index');
const http = require('http');
const { on } = require('events');
const debug = require('debug')('node-angular');


//identification/validation du port

const normalizePort = val =>{
    var port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }
    if(port>=0){
        return port;
    }
    return false;
}

//methode qui va gérer les erreurs du port

const onError = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }

// exemple condition ternaire : const a = (c + b == 8) ? true : false; 
    const bind = typeof port === "string" ? "pipe" + port : "port " + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind+'requiert des privilèges élevés')
            process.exit(1);
            break

        case 'EADDRINUSE':
            console.error(bind+'est déjà utilisé')
            process.exit(1);
            break
        
        default: 
            throw error;

    }
}

//fonctionnement correct du serveur
const onlistening = () => {
    const bind = typeof port === "string" ? "pipe" + port : "port " + port;
    debug('en lecture sur ' + bind);
}

const port = normalizePort("3000");
app.set("port", port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onlistening);
server.listen(port);