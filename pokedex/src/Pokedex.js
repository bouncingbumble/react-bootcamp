import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './Pokedex.css'

export default class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                <h1 className='Pokedex-title'>Total XP: {this.props.pokemon.totalXP}</h1>
                <div className='Pokedex-card-container'>
                    {this.props.pokemon.cards.map(poke => <PokeCard poke={poke} />)}
                </div>
                {this.props.isWinner && <h2>This hand won!</h2>}
            </div>
        )
    }
}
