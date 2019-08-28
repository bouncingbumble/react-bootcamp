import React, { Component } from 'react'
import './PokeCard.css'

export default class PokeCard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.poke
        return (
            <div className='PokeCard'>
                <h3>{name}</h3>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeroId(id)}.png`} alt={name} />
                <p>Type: {type}</p>
                <p>Exp: {base_experience}</p>
            </div>
        )
    }
}

function zeroId(id) {
    let newId = id
    for (let i = 0; i < 3 - id.toString().length; i++) {
        newId = '0' + newId
    }
    return newId
}