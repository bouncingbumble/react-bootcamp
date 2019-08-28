import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './Pokedex.css'

export default class Pokedex extends Component {
    render() {
        let title = this.props.isWinner ? <h1 className='Pokedex-winner'>Winning hand</h1>
            : <h1 className='Pokedex-loser'>Losing hand</h1>
        return (
            <div className='Pokedex'>
                <div className="Pokedex-message">
                    {title}
                </div>
                <p className='Pokedex-title'>Total XP: {this.props.exp}</p>
                <div className='Pokedex-card-container'>
                    {this.props.pokemon.map(poke => <PokeCard poke={poke} />)}
                </div>

            </div>
        )
    }
}
