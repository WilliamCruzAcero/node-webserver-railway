const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

// configuracion de hbs para las vistas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')

// servir contenido statico
app.use( express.static('public') );

// ruta a home
app.get('/', (req, res ) => {
    res.render('home', {
        nombre: 'William Cruz',
        titulo: 'Curso de Node'
    });

});
app.get('/generic', (req, res ) => {
    res.render('generic', {
        nombre: 'William Cruz',
        titulo: 'Curso de Node'
    });

})
 
app.get('/elements', (req, res ) => {
    res.render('elements', {
        nombre: 'William Cruz',
        titulo: 'Curso de Node'
    });

})
app.get('/*', (req, res ) => {
    res.sendFile(__dirname + '/public/old/404.html');

})


app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`)
});
