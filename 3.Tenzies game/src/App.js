import React from "react"
import Dies from "./Dies"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"


export default function App() {
	
	const [rollRecord, setRollRecord] = React.useState(0)
	const [allDice, setDice] = React.useState(allNewDice())
	const [tenzies, changeTanzies] = React.useState(false)
	const die = allDice.map(item => {
		return <Dies
			key={item.id}
			value={item.value}
			isHeld={item.isHeld}
			holdToggle={() => !tenzies && holdToggle(item.id)}
		/>
	})
	
	function allNewDice() {
		let dices = []
		for (let i = 1; i <= 10; i++) {
			dices.push(createDice())
		}
		
		return dices
	}
	
	function createDice() {
		return {
			value: Math.floor(Math.random() * 6) + 1,
			isHeld: false,
			id: nanoid()
		}
	}

	function holdToggle(id) {
		setDice(oldDice => oldDice.map(item => {
			return item.id === id ?
				{ ...item, isHeld: !item.isHeld } : item
		}))
	}


	function roll() {
		if(!tenzies) {
			setDice(oldDice => oldDice.map(item => {
				return item.isHeld ?
					item : createDice()
			}))
			setRollRecord(rollRecord+1)
		} else {
			setDice(allNewDice())
			changeTanzies(false)
			setRollRecord(0)
		}
	}

	React.useEffect(() => {
		const allHeld = allDice.every(die => die.isHeld)
		const firstValue = allDice[0].value
		const allSameValues = allDice.every(die => die.value === firstValue)
		if(allHeld && allSameValues) {
			changeTanzies(true)
		}
	}, [allDice])

	return (
		<main>
			{tenzies && <Confetti/>}
			<h1 className="title">Tenzies</h1>
			<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			<p className="hint">Hint: Try to win in as less moves as possible.</p>
			<div className="dice-container">
				{die}
			</div>
			<button className="btn" onClick={roll}>{tenzies ? 'New Game' : 'Roll'}</button>
			{tenzies && <p>Congratulations You won in {rollRecord} rolls!!</p>}
		</main>
	)
}
