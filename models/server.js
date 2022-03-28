const express = require('express');
var cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middleware
        this.middleware()

        //App Routes
        this.routes();
    }

    middleware() {

        //cors
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio Publico
        this.app.use(express.static('public'));


    }

    routes() {

        this.app.use(this.usersPath, require('../routes/users'))

        this.app.get('/asdf', (req, res) => {
            res.send('Hello World')
        })


        this.app.get('/holamundo', (req, res) => {
            res.json({
                msg: 'Hello World'
            })
        })
        // this.app.get('/', (req, res) => {
        //     console.log('asdf');
        //     // res.status(404).send('404 | Page not found.');
        //     res.sendFile(__dirname +'/public/index.html');
        // })

        this.app.get('*', (req, res) => {
            // res.status(404).send('404 | Page not found.');
            res.status(404).sendFile(__dirname + '/public/404.html');
        })


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        })
    }
}

module.exports = Server;