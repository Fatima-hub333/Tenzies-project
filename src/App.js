/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React from 'react';
import { nanoid } from 'nanoid';
import Die from './Die';
import './index.css';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i += 1) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((oldDice) => oldDice.map((die) => (die.id === id
      ? { ...die, isHeld: !die.isHeld }
      : die)));
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}
