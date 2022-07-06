import React from 'react'
import Confetti from 'react-Confetti'
import Die from './Die'

const App = () => {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const firstValue = dice[0].firstValue
    const allHeld = dice.every(die => die.held)
    const allSameNumber = dice.every(die => die.value === firstValue)
    if (allHeld && allSameNumber) {
      setTenzies(true)
    }
  }, [dice])

  function randomDieValue() {
    return Math.ceil(Math.random() * 6)
  }

  function allNewDice() {
    const newArray = []
    for (let i = 0; i < 10; i += 1) {
      const newDie = {
        value: randomDieValue(),
        held: false,
        id: i + 1
      }
      newArray.push(newDie)
    }
    return newArray
  }

  function rollUnheldDie() {
    if (!tenzies) {
      setDice((oldDice) => oldDice.map((die, i) =>
        die.held ? 
          die: {value: randomDieValue(), held: false, id: i + 1}
      ))
    } else {
      setDice(allNewDice())
      setTenzies(false)
    }
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
        { ...die, held: !die.held } :
        die
    }))
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} {...die} hold={() => holdDice(die.id)} />
  ))
  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll untill all dice are the same. Click each dice to
        freeze it at its current value between rolls.
      </p>
      <div className="die-container">
        <button className="roll-dice" onClick={rollUnheldDie}>
          {tenzies ? "Reset Game" : "Roll"}
        </button>
      </div>
    </main>
  )
}

export default App