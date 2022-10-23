import styled from "@emotion/styled"
import Carrito from "./Carrito"
// necesito un metodo que me devuelva el acumulado
// esto va  a ser solo de pruebas igual despues sera un modal al hacer click en el shopping cart
//lista la primera estructura del carrito ahora falta agregarle el total que se sume con la lista 
// necesito crear un nuevo state donde esten todos los precios y eso se va a crear en el momento que le den click a
//añadir al carrito

const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left : 0;
background: rgba(0, 0, 0, .5);
display: flex;
justify-content: center;
align-items: center;


`



const ContenedorCarrito = styled.div`
margin-top: 55px;
max-width: 950px;
width: 90%;
background-color:#dededf; 
margin-bottom:55px;
padding: 15px;
border-radius:12px;
overflow:hidden; 
max-height: 500px;
overflow-y: scroll;
`

const TextoCarrito= styled.p`
color:#222;
text-transform:uppercase;
font-weight:700;
font-size:16px;
padding:5px;
margin-top:10px;
text-align:center`


const ContenedorTexto = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
`

const TextoTotal = styled.h4`
color:#2d3b35;
font-weight:700;
font-size:22px;
padding:7px;
margin-top:34px;
text-align:center;

`
const Header = styled.div`
display: flex;
justify-content:space-between;
text-align:center;
margin-top:12px;
margin-bottom: 8px;`

const TextoHeader= styled.p`
color:#465b52;
text-transform:uppercase;
font-weight:500;
font-size:15px;
padding:5px;
margin-top:-20px;

text-align:center`


const Cerrar = styled.button`
background-color: #dededf;
border: none;
padding: 10px;
cursor: pointer;
margin-top:-30px;
`




function Compras({carrito, setCarrito, pagar, setPagar, total, setTotal, setModal }) {

  function cerrarModal(){
    setModal(false)
  }
  
  return (
    <Overlay>
        <ContenedorCarrito>
          <Header>
            <TextoHeader>Your bag</TextoHeader>
            <Cerrar onClick={()=> cerrarModal()}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg></Cerrar>
          </Header>
          <ContenedorTexto>
            <TextoCarrito>Product</TextoCarrito>
            <TextoCarrito>Name</TextoCarrito>
            <TextoCarrito>Price</TextoCarrito>
            <p>{''}</p>
          </ContenedorTexto>  
          
          {carrito.map(producto=>(
            <Carrito
            key={producto.id}
            producto = {producto}
            carrito={carrito}
            setCarrito= {setCarrito}
            pagar= {pagar}
            setPagar={setPagar}
            total={total}
            setTotal={setTotal}
            />
          ))}

          
          <ContenedorTexto>
          <div>{''}</div>
          <TextoTotal>Total:</TextoTotal>
          <TextoTotal>{pagar}$</TextoTotal>
          
          </ContenedorTexto>
        </ContenedorCarrito>
    </Overlay>
  )
}

export default Compras
