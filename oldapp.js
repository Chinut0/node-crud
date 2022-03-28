require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/asdf', (req, res) => {
    res.send('Hello World')
})

// app.get('/', (req, res) => {
//     console.log('asdf');
//     // res.status(404).send('404 | Page not found.');
//     res.sendFile(__dirname +'/public/index.html');
// })

app.get('*', (req, res) => {
    // res.status(404).send('404 | Page not found.');
    res.status(404).sendFile(__dirname +'/public/404.html');
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
})
