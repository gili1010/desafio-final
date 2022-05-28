const { Router } = require('express')
const express = require('express')

const { controladoresApi } = require('../controllers/controladoresApi.js')

const routerApiCarrito = new Router()

routerApiCarrito.use(express.json())
routerApiCarrito.use(express.urlencoded({ extended: true }))

//crea un carrito y devuelve su ID
routerApiCarrito.post('/api/carrito', controladoresApi.postcarrito)
//vacia un carrito y lo elimina
routerApiCarrito.delete('/api/carrito/:id', controladoresApi.deletecarrito)
//permite mostrar los productos del carrito
routerApiCarrito.get('/api/carrito/:idcarrito/productos', controladoresApi.getproductoscarrito)
//incorporar productos al carrito por su ID
routerApiCarrito.post('/api/carrito/:idcarrito/productos', controladoresApi.postproductoscarrito)
//eliminar un producto por su id carrito y id producto
routerApiCarrito.delete('/api/carrito/:idcarrito/Productos/:id_prod', controladoresApi.deleteproductocarrito)

module.exports={routerApiCarrito}