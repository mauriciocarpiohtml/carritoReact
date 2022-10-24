import styled from '@emotion/styled'
import React, { useState } from 'react'


const ContenedorProducto = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
margin-top: 15px;
margin-bottom: 12px;

`
const TextoProducto = styled.p`
color:#465b52;
text-transform:uppercase;
font-weight:500;
font-size:14px;
padding:5px;
margin-top:35px;
text-align:center;
margin-left: 25px;

@media(min-width:768px) {
  font-size:16px;
  margin-left: 0;
}
`


const ImagenProducto = styled.img`
max-width: 80px;
border-radius:11px;
margin: 0 auto;

@media(min-width:768px) {
  max-width: 100px;
}
`

const Eliminar = styled.button`
margin-top: 38px;
padding:5px;
height: 25px;
width: 51px;
background-color: #a72a2a;
color: #fff;
border-radius: 100px;
border: none;
font-weight: 700;
margin-left: 25px;
cursor: pointer;
@media(min-width:768px) {
  margin-left: 70px;
}

`



function Carrito({producto, carrito ,setCarrito, total, setTotal, setPagar, pagar}) {
  
  function eliminarProducto(id, precio){

    const carritoFiltrado = carrito.filter( articulo => articulo.id !== id)
    
    setCarrito(carritoFiltrado)
    
    const totalFiltrado = total.filter(numero => numero !== precio)

    setTotal(totalFiltrado) 

     //aca simplemente es , lo que esta en el state de pagar
     //le voy a restar el precio del producto al que le hicieorn click
   const resta =  pagar - precio
    setPagar(resta)
  }

  return (
    <ContenedorProducto>
          <ImagenProducto 
          src={producto.imagen}/>
          <TextoProducto>{producto.nombre} </TextoProducto>
          <TextoProducto>{producto.precio}$ </TextoProducto>
          <Eliminar 
          onClick={()=> eliminarProducto(producto.id, producto.precio)}>X</Eliminar>


    </ContenedorProducto>
  )
}

export default Carrito
