const { dbproductos } = require("../database/dbproductos.js")
const Contenedor = require('../contenedor.js')

const contenedor = new Contenedor('./productos.json');

/* let resultado = contenedor.leer()/* .then((list) => {
        return resultado = (list)
    }) */ 

//=======================================================\\
const controladoresApi = {

    //======================PRODUCTOS=================================\\
    getproducto:(req, res) =>{
        const id = req.params.idProducto
        try {
            res.json(dbproductos.obtenerSegunId(id));       
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    },
    getproductos: (req, res) => {
        //contenedor.leer().then((list) => {
        //res.json(contenedor)
       // })
       if(Object.entries(req.query).length > 0){
            res.json(dbproductos.obtenerSegunTitulo(req.query.titulo))
       }else{
            res.json(dbproductos.obtenerTodos())
            //res.json(contenedor.productos)
       }
    },
    postproductos:(req,res) => {
        const productoAgregado = dbproductos.agregarProducto(req.body)
        res.status(201).json(productoAgregado)
        //res.redirect('../productos')
        //res.redirect('/api/productos')
        console.log("producto agregado")
    },
    deleteproducto:(req,res) =>{
        const id = req.params.idProducto
        try {
            dbproductos.borrarProductoSegunId(id); 
            res.sendStatus(204)      
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    },
    putproducto: (req, res) => {
        const id = req.params.idProducto
        const datos = req.body
        try {
            const productoReemplazado = dbproductos.reemplazarSegunId(id, datos)
            res.json(productoReemplazado)
        } catch (error) {
                res.status(404).json({ error: error.message })
        }
    },

    //buscar por ID
    getidcont: (req, res) =>{
    res.json(contenedor.getById(2))
    },

    //======================CARRITO=================================\\

    postcarrito: (req, res) => {
        const carritoCreado = dbproductos.agregarcarrito(req.body)
        res.status(201).json(carritoCreado)

        console.log("carrito creado")
    },

    deletecarrito: (req, res) => {
        const id = req.params.idcarrito
        try {
            dbproductos.borrarCarritoSegunId(id); 
            res.sendStatus(204)      
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    },

    getproductoscarrito: (req, res) => {
        const idcarrito = req.params.idcarrito
        try {
            res.json(dbproductos.obtenerSegunIdcarrito(idcarrito));       
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    },

    postproductoscarrito: (req, res) => {
        const idcarrito = req.params.idcarrito
        const productoAgregado = dbproductos.agregarProductoCarrito(req.body,idcarrito)
        res.status(201).json(productoAgregado)
        console.log("producto agregado")
    },
    deleteproductocarrito: (req, res) => {
        const id = req.params.idcarrito
        const id_prod = req.params.id_prod
        try {
            dbproductos.borrarProdCarrito(id,id_prod); 
            res.sendStatus(204)      
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    }

}
module.exports = {controladoresApi} 

