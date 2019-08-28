import React from 'react';
import { choice, remove } from './helpers'
import foods from './foods'

function App() {
    const rndFood = choice(foods)
    console.log(foods.length)
    console.log(`I'd like one ${rndFood} please`)
    console.log(`Here you go:  ${rndFood}`)
    console.log('Delicous! may I have another?')
    console.log(remove(foods, rndFood))
    console.log(`I'm sorry, we're all out. We have ${foods.length} yet`)
    return (
        <div className="App">
            <h1>choices</h1>
        </div>
    );
}

export default App;
