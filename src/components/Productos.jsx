import styled from '@emotion/styled'
import { useState } from 'react'

//adaptar esto mejor a dispositivos moviles

const ContenedorProducto = styled.div`
    
    align-items: center;
    
    max-width: 280px;
     margin: 0 auto; 
    padding: 0.5rem 0.7rem;
    border: 1px solid #cce7d0;
    border-radius: 5px;
    transition-property: transform;
    transition-duration: 400ms;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
    }

    @media(min-width: 768px) {
        min-width: 250px;
        margin-top: 7px; 
    } 
    `
const ImagenProducto = styled.img`
width:100%;
border-radius: 5px;`  

const MarcaProducto = styled.p`
color:#465b52;
font-size:13px;
margin-top: 11px`

const TituloProducto = styled.h5`
font-size: 17px;
color: #323d38cf;
font-weight:700;`

const Precio = styled.h5`
font-size: 21px;
color: #088178;
font-weight:900;`

const Boton = styled.button`
width:100%;
padding: 8px;
border-radius: 6px;
background-color: #0e948b;
margin-top: 8px;
margin-bottom: 5px;
color: #fff;
font-weight: 900;
text-transform: uppercase;
text-align: center;
cursor: pointer;
border: none;
transition-property: color;
transition-duration: 400ms;

:hover{
    background-color:#076e67
}
`

function Productos({item, carrito, setCarrito, total, setTotal,setPagar}) {
    

    const {nombre, precio, imagen} = item

    
    function handleProducto(item){
        //aqui hay un error porque si agrego el mismo producto comparten la misma id
        setCarrito([...carrito, item])

        // un array donde tengo todos los totales a pagar

        setTotal([...total, item.precio])
        
        
         const sumaTotal = total.reduce(
            (valor1, valor2) => valor1 + valor2, item.precio
            
        )

        // veamos si al pasarlo desde el app funciona 
        setPagar(sumaTotal)

        

        
        
    }
  return (
    <>
        <ContenedorProducto>
            <ImagenProducto 
            src={imagen}/>
            <MarcaProducto>Alphalethe</MarcaProducto>
            <TituloProducto>{nombre}</TituloProducto>
            <Precio>{precio}$</Precio>
            <Boton 
            onClick={()=> handleProducto(item)}>Add to cart</Boton>
        </ContenedorProducto>
    </>
  )
}

export default Productos
