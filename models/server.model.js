const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:           '/api/auth',
            users:          '/api/users',
            categorias:     '/api/categorias',
            productos:      '/api/productos',
            buscar:         '/api/buscar'
        }

        //Connect to DB
        this.connectDB()

        //Middleware
        this.middleware()

        //App Routes
        this.routes();
    }


    async connectDB() {
        await dbConnection()
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
        this.app.use(this.paths.auth, require('../routes/auth.route'))
        this.app.use(this.paths.users, require('../routes/users.route'))
        this.app.use(this.paths.categorias, require('../routes/categorias.route'))
        this.app.use(this.paths.productos, require('../routes/productos.route'))
        this.app.use(this.paths.buscar, require('../routes/buscar.route'))

        // this.app.get('/asdf', (req, res) => {
        //     res.send('Hello World')
        // })


        // this.app.get('/holamundo', (req, res) => {
        //     res.json({
        //         msg: 'Hello World'
        //     })
        // })
        // this.app.get('/', (req, res) => {
        //     // res.status(404).send('404 | Page not found.');
        //     res.sendFile(__dirname +'/public/index.html');
        // })

        this.app.get('*', (req, res) => {
            // res.status(404).send('404 | Page not found.');
            res.status(404).sendFile(__dirname.replace('/models', '') + '/public/404.html');
        })


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        })
    }
}

module.exports = Server;