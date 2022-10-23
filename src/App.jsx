import { useState } from 'react'
import styled from '@emotion/styled'
import Coleccion from './components/Coleccion'
import Compras from './components/Compras'
import Navegacion from './components/Navegacion'

function App() {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState([])
  const [pagar, setPagar] = useState(0)
  const [modal, setModal] = useState(false)

  // const cantidadCarrito = carrito.length
  

  return (
    <>
      <Navegacion 
      setModal={setModal}
      // cantidadCarrito= {cantidadCarrito}  
      />

      {modal && 
         <Compras
         carrito={carrito}
         setCarrito={setCarrito}
         pagar={pagar}
         setPagar= {setPagar}
         total = {total}
         setTotal= {setTotal}
         setModal = {setModal}
         />
      }

      <Coleccion
      carrito = {carrito}
      setCarrito= {setCarrito}
      total= {total}
      setTotal= {setTotal}
      pagar= {pagar}
      setPagar= {setPagar}
      />
      
      
       

      
    </>
  )
}

export default App
