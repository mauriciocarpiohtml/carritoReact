import React from 'react'
import { useState } from 'react'
import Productos from './Productos'
import styled from '@emotion/styled'
import top1 from '../images/blackseries1.jpg'
import top2 from '../images/colorazul.jpg'
import leggins1 from '../images/blackseries4.jpg'
import jacket1 from '../images/blackseries6.jpg'
import leggins2 from '../images/tops3.1.jpg'
import leggins3 from '../images/tops4.1.jpg'
import top3 from '../images/blackseries7.jpg'
import jacket2 from '../images/sueter1.jpg'

const ContenedorTexto = styled.div`
    margin-top:40px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 35px`

const TituloColeccion = styled.h3`
    font-weight: 900;
    font-size: 39px; 
    color: #222;
`

const SubtituloColeccion = styled.p`
    font-size: 18px;
    color: #465b52;`

const ContenedorProductos = styled.div`
    display: grid;
    max-width: 950px;
    width: 90%;
    margin: 0 auto;
     gap: 15px; 
    @media(min-width:768px) {
        
        grid-template-columns: repeat(2,1fr);
        margin-bottom: 40px;
        gap: 18px; 
    }

    @media(min-width:992px) {
        
        grid-template-columns: repeat(3,1fr);
        
    }
`
const lista = [
    {nombre: 'Pulse Kinetic', id:1, precio: 79, categoria:'tops', imagen : top1},
    {nombre: 'Infinity Top', id:2, precio: 39, categoria:'jackets', imagen : jacket1},
    {nombre: 'Muscule Top', id:3, precio: 45, categoria:'tops', imagen : top2},
    {nombre: 'Black Leggins', id:4, precio: 39, categoria: 'leggins', imagen : leggins1},
    {nombre: 'Infinity Blue', id:5, precio: 55, categoria:'tops', imagen : top3},
    {nombre: 'Black Leggins', id:8, precio: 15, categoria:'leggins', imagen :leggins3},
    {nombre: 'Jacket', id:6, precio: 39, categoria:'jackets', imagen : jacket2},
    {nombre: 'Blue Leggins', id:7, precio: 25, categoria:'leggins', imagen : leggins2},
    

]


function Coleccion({carrito, setCarrito, total, setTotal,setPagar}) {
    
  return (
    <>
        <ContenedorTexto>
            <TituloColeccion>Winter Collection</TituloColeccion>
            <SubtituloColeccion>Modern Design from alphaland</SubtituloColeccion>
        </ContenedorTexto>
        <ContenedorProductos>

            {lista.map(item =>(
                <Productos
                key={item.id}
                item={item}
                carrito={carrito}
                setCarrito={setCarrito}
                total= {total}
                setTotal= {setTotal}
                
                setPagar= {setPagar}
                />
            ))}

        </ContenedorProductos>
    </>
  )
}

export default Coleccion
