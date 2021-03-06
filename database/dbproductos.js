//Generamos un ID con la fecha del dia.
function generarId() {
    return `${Date.now()}`
  }

  const carritos = [
    {
      "productos": []
    }
  ]
  
  const productos = [
      {
          titulo: "Gaseosa",
          precio: "$150",
          img: "img",
          id: 1
        },
        {
          titulo: "cerveza",
          precio: "$180",
          img: "img",
          id: 2
        },
        {
          titulo: "fernet",
          precio: "$780",
          img: "img",
          id: 3
        },
        {
          titulo: "azucar",
          precio: "$170",
          img: "img",
          id: 4
        },
        {
          titulo: "aceite",
          precio: "$280",
          img: "img",
          id: 5,
        },
        {
          titulo: "cafe",
          precio: "$280",
          img: "img",
          id: 6
        },
        {
          titulo: "galletas",
          precio: "$150",
          img: "img",
          id: 7
        },
        {
          titulo: "chocolate",
          precio: "$10",
          img: "img",
          id: 8
        },
        {
          titulo: "gelatina",
          precio: "$80",
          img: "img",
          id: 9
        },
        {
          titulo: "pan",
          precio: "$200",
          img: "img",
          id: 10
        }
  ]
  module.exports = { productos }
  
  const dbproductos = {
      //========PRODUCTOS===============\\
      obtenerTodos: () => {
          return [...productos]
      },
      obtenerSegunTitulo: titulo => {
          return productos.filter(a => a.titulo === titulo)
      },
      obtenerSegunId: id => {
          const productoBuscado = productos.find(a => a.id == id)
          if (!productoBuscado) {
            throw new Error('producto no encontrado');
          }
          return productoBuscado
      },
      agregarProducto: (datos) => {
          // deberia validar cosas
          // si ya existe? no la agrego
          // si le faltan datos? no la agrego
          // si algun dato tiene un formato invalido? no la agrego 
          const producto = datos
          producto.id = generarId()
          productos.push(producto)
          return producto
      },
      borrarProductoSegunId: id => {
          const indiceBuscado = productos.findIndex(p => p.id == id)
          if (indiceBuscado === -1) {
              const error = new Error('no existe un producto con ese id')
              throw error
          }
          productos.splice(indiceBuscado, 1)
      },
      reemplazarSegunId: (id, datos) => {
          const indiceBuscado = productos.findIndex(p => p.id == id)
          if (indiceBuscado === -1) {
              const error = new Error('no existe un producto con ese id')
              throw error
          }
          // deberia validar datos
          // si le faltan datos? no la agrego
          // si algun dato tiene un formato invalido? no la agrego 
          const producto = datos
          producto.id = id
          productos[indiceBuscado] = producto
          return producto
      },

            //========CARRITO===============\\
            agregarcarrito: (prod) => {
              // deberia validar cosas
              // si ya existe? no la agrego
              // si le faltan datos? no la agrego
              // si algun dato tiene un formato invalido? no la agrego 
              const carrito = prod
              carrito.idcarrito = generarId()
              carritos.push(carrito)
              return carrito
          },
          borrarCarritoSegunId: id => {
            const indiceBuscado = carritos.findIndex(p => p.idcarrito == id)
            if (indiceBuscado === -1) {
                const error = new Error('no existe un producto con ese id')
                throw error
            }
            carritos.splice(indiceBuscado, 1)
        },
        obtenerSegunIdcarrito: id => {
          const carritoBuscado = carritos.find(a => a.idcarrito == id)
          if (!carritoBuscado) {
            throw new Error('No existe id carrito');
          }
          return carritoBuscado.productos
      },
      agregarProductoCarrito: (datos) => {
        // deberia validar cosas
        // si ya existe? no la agrego
        // si le faltan datos? no la agrego
        // si algun dato tiene un formato invalido? no la agrego 
        const productoNuevo = datos
        productoNuevo.id = generarId()
        for( prod of carritos){
          prod.productos.push(productoNuevo)
        }
        //carritos.productos.push(productoNuevo)
        return productoNuevo
    },
      borrarProdCarrito: (id,id_prod) => {
        const indiceBuscado = carritos.find(p => p.idcarrito == id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe un carrito con ese id')
            throw error
        }
        const prodSearch = indiceBuscado.productos.findIndex((obj) => obj.id == id_prod)

              if(prodSearch<0) {
                return error

            }
              indiceBuscado.productos.splice(prodSearch, 1)

            }
        
    }
  
  module.exports = { dbproductos }
