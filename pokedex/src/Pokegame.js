import React, { Component } from 'react'
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    getRandomDeck = () => {
        let deck = []
        for (let i = 0; i <= 3; i++) {
            deck.push(this.props.pokemon[Math.floor(Math.random() * 8)])
        }
        return deck
    }

    getTotal = deck => {
        let total = 0
        deck.forEach(pokemon => total += pokemon.base_experience)
        return total
    }

    render() {
        let deck1 = {
            cards: [],
            totalXP: 0
        }

        deck1.cards = this.getRandomDeck()
        deck1.totalXP = this.getTotal(deck1.cards)

        let deck2 = {
            cards: [],
            totalXP: 0
        }

        deck2.cards = this.getRandomDeck()
        deck2.totalXP = this.getTotal(deck2.cards)


        return (
            <div className='Pokegame'>
                <Pokedex pokemon={deck1} isWinner={deck1.totalXP > deck2.totalXP} />
                <Pokedex pokemon={deck2} isWinner={deck2.totalXP > deck1.totalXP} />
            </div>
        )
    }
}
