import React from 'react';
import Die from './Die';
import './index.css';

const App = () => {
  const [dice, setDice] = React.useState(allNewDice())
  // new array to hold my numbers
  // loop 10 times
  // push a random number from 1-6 to my array
  // return array
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i += 1) {
      newDice.push(Math.ceil(Math.random()* 6) );
    }
    return newDice;
  }

  const diceElements = dice.map(die => <Die value={die}/>)

  return (
    <main>
      <div className="dice-container">
       {diceElements}
      </div>
    </main>
  );
};
export default App;
