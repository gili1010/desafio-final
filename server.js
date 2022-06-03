
const express = require('express')

const { routerApiProductos } = require('./routers/routerApiProductos.js');
const { routerApiCarrito } = require('./routers/routersApiCarrito.js');

const app = express()

//Declaramos una variable booleana para saber si es usuarios es o no admin
const ISADMIN = true

//Productos
app.use(routerApiProductos)
//Carrito
app.use(routerApiCarrito)

app.all('*', (req, res) => {
    res.status(404).json({ERROR: `Ruta ${req.url} con el metodo ${req.method} no implementada!`})
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })