import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto ] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')
    setCategorias(data)
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  const handleClickCategoria = id => {
    const categoria = categorias.filter(cat => cat.id === id)
    setCategoriaActual(categoria[0])
  }

  // Funcion para setear el producto
  const handleSetProducto = producto => {
    setProducto(producto)
  }

  // Funcion para el modal
  const handleChangeModal = () => {
    setModal(!modal)
  }

  // Agregar y actualizar pedido
  const handleAgregarPedido = ({categoriaId, imagen, ...pedidoSeleccionado}) => {
    if(pedido.some(productoState => productoState.id === pedidoSeleccionado.id)) {
      console.log("El producto ya existe");
      // Actualizar cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === pedidoSeleccionado.id ? pedidoSeleccionado.id : productoState)
      setPedido(pedidoActualizado)
    } else {
      console.log("El producto no existe");
      setPedido([...pedido, pedidoSeleccionado])
    }
    
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}

export default QuioscoContext