const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/users';

        //middlewares
        this.middlewares();

        // LECTURA Y PARSEO DATOS
        this.app.use(express.json());

        this.routes();
    }

    middlewares(){

        this.app.use(cors());

        this.app.use(express.static('public'));
    }
    
    routes(){
        
       this.app.use(this.usersPath,require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en puerto ${this.port} `)
        })
    }



}




module.exports = Server;