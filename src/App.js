import React from 'react';
import Die from './Die';
import './index.css';

const App = () => {
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
  console.log(allNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  );
};
export default App;
