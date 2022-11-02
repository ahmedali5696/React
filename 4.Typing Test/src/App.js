import React from "react"
import useInputRef from "./useRef"

// const {inputRef} = useInputRef()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      typingFild: '',
      wordCount: 0,
      timeRemaining: 3,
      game: false
    }
  }

  

  wordCountCalc = (text) => {
    const separatedWords = text.trim().split(' ')
    const filteredWords = separatedWords.filter(word => word !== "")
    this.setState({ wordCount: filteredWords.length })
  }


  handelChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.wordCountCalc(this.state.typingFild)
  }


  startGame = () => {
    this.setState({ game: true })
    setTimeout(() => {
      this.setState(prevState => ({ timeRemaining: prevState.timeRemaining - 1 }))
    }, 1000)

    this.inputRef.current.focus()
  }

  playAgain = () => {
    this.setState({
      typingFild: '',
      wordCount: 0,
      timeRemaining: 3,
      game: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { timeRemaining, game } = this.state

    if (game) {
      setTimeout(() => {
        if (timeRemaining !== prevState.timeRemaining && timeRemaining > 0) {
          this.setState(prevState => ({ timeRemaining: prevState.timeRemaining - 1 }))
        } else if (timeRemaining === 0) {
          this.setState({ game: false })
        }
      }, 1000)
    }
  }


  render() {
    const { typingFild, wordCount, timeRemaining, game } = this.state
    return (
      <main className="container">
        <h1>How fast do you type?</h1>
        <textarea ref={this.inputRef} name="typingFild" value={typingFild} onChange={this.handelChange} disabled={!game}/>
        <h4>Time remaining: {timeRemaining}</h4>
        <button onClick={timeRemaining ? this.startGame : this.playAgain} disabled={game} >{timeRemaining ? "Start" : "Play Again"}</button>
        { !timeRemaining && <h1>Word count: {wordCount}</h1>}
      </main>
    )
  }
}