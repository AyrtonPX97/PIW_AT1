import React, { Component } from 'react';
import logo from './logo.svg';
import './Nav.css';

class Navegador extends Component {
    render() {
        return (
            <nav>
                <img src={logo}/>
                <div className='butao'>
                    <button>Linha do tempo</button>
                    <button>Perfil</button>
                </div>
                <span className='usuario'>Viciado</span>
            </nav>
            
        )
    }
}

export default Navegador;