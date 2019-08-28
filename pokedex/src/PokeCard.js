import React, { Component } from 'react'

export default class PokeCard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.poke
        return (
            <div className='PokeCard'>
                <h3>{name}</h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
                <p>Type: {type}</p>
                <p>Exp: {base_experience}</p>
            </div>
        )
    }
}
