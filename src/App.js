import React, { Component } from 'react'
import './App.css'
import Timer from './components/Timer'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      breakLenght: 5,
      minute: 25,
      second: 0,
      IntervalId: 0
    }
  }

  handlePlay () {
    const IntervalId = setInterval(this.decreaseTimer.bind(this), 1000)

    this.setState({
      IntervalId: IntervalId
    })
  }

  decreaseTimer () {
    switch (this.state.second) {
      case 0:
        this.setState((prevState) => {
          return {
            minute: prevState.minute - 1
          }
        })
        this.setState({
          second: 59
        })
        break
      default:
        this.setState((prevState) => {
          return {
            second: prevState.second - 1
          }
        })
        break
    }
  }

  handleStop () {
    clearInterval(this.state.IntervalId)
  }

  handleReset () {
    this.handleStop()
    this.setState({
      minute: 25,
      second: 0
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to my awsome pomodoro time</h1>
        </header>
        <Timer />
      </div>)
  }
}

export default App
