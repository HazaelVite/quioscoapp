import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto ] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [paso, setPaso] = useState(1)

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
  const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)) {
      // Actualizar cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === 
        producto.id ? producto : productoState)
      setPedido(pedidoActualizado)
      toast.success("Guardado correctamente")
    } else {
      setPedido([...pedido, producto])
      toast.success("Agregado al Pedido")
    }

    setModal(false)
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
        handleAgregarPedido,
        pedido,
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