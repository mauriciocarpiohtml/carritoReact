import styled from '@emotion/styled'


const NavBar = styled.nav`
    
    width: 100%;
    text-align: center;
    
    background-color: #EAEBED;
    display: flex;
    justify-content: space-between;
    padding: 23px;
    margin-bottom: 25px;
    position: relative;
    
    `

const Logo = styled.h2`
text-transform: uppercase;
color: #222;
font-weight: 900 ;
font-size: 22px;
margin-left: 18px;
@media (min-width:768px) {
  margin-left: 190px;
}
`

const Carrito = styled.button`
margin-right: 18px;
border: none;
background-color: #EAEBED;
cursor: pointer;
/* position: relative; */

@media (min-width:768px) {
  margin-right: 190px;
}
`
// const Numero = styled.p`
// border-radius:15px;

// background-color: #088178;
// position: absolute;
// font-size:10px;
// font-weight:700;
// color: #fff;
// padding: 3px;
// margin-left: 410px;
// margin-top:15px;

// @media (min-width:768px) {
//   margin-left: 1103px;
// }`

function Navegacion({setModal}) {

    function abrirModal (){
      
      setModal(true)
        
    }
  return (
    <>
    <NavBar>
        <Logo>Alphalethe</Logo>
        <Carrito 
        onClick={()=> abrirModal()}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg></Carrito>
        {/* <Numero>{cantidadCarrito}</Numero> */}
    </NavBar>
    </>
  )
}

export default Navegacion
