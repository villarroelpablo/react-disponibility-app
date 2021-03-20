import React from "react";
import Bloque from './components/Bloque'
import motos from './horasData'
import Header from './components/Header'
import './App.css'


class App extends React.Component {

    // constructor() {
    //     super()

    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        disponibles: 5
    }

    handleClick = (num) => {
        this.setState(prevState => {
            return {
                disponibles: prevState.disponibles + num
            }
        })
    }


    render() {

        const bloqueComponents = motos.map(moto => <Bloque key={moto.id} hora={moto.hora} disponibles={this.state.disponibles} handleClick={this.handleClick} />)

        return (
            <div className='container'>
                <Header disponibles={this.state.disponibles} />
                <div className='container-bloq'>
                    {bloqueComponents}
                </div>
            </div>
        )
    }
}

export default App