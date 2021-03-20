
function Header(props) {
    return (
        <div className='titulo'>
            <h1>React APP</h1>
            <p>Instrucciones: Haga click en un cuadrado para reservar al motociclista.</p>
            <h3>Disponibles: {props.disponibles}</h3>
        </div> 
    )
}

export default Header