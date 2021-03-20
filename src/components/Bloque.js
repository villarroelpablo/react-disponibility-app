import React from 'react'

class Bloque extends React.Component {

    state = {
        using: false,
        style: {}
    }

    handleClick = () => {

        if (this.props.disponibles > 0 && !this.state.using) {
            this.setState({
                using: true,
                style: { backgroundColor: 'lightgreen' }
            })
            this.props.handleClick(-1)

        } else if (this.props.disponibles >= 0 && this.state.using) {
            this.setState({
                using: false,
                style: {}
            })

            this.props.handleClick(1)
        } else {
            this.setState({
                style: { backgroundColor: 'red' }
            })
        }

        if (this.state.style.backgroundColor === 'red' && this.props.disponibles === 0) {
            this.setState({
                style: {}
            })
        }

    }

    render() {

        return (
            <div className='bloque' style={this.state.style} onClick={this.handleClick} >
                <p>{this.props.hora}</p>
            </div>
        )
    }
}

export default Bloque