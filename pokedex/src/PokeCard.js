import React, { Component } from 'react'
import './PokeCard.css'

export default class PokeCard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.poke
        return (
            <div className='PokeCard'>
                <h3>{name}</h3>
                <div className="PokeCard-image">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`} alt={name} />
                </div>
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

function padToThree(id) {
    return id <= 999 ? `00${id}`.slice(-3) : id
}