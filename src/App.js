import React, { Component } from 'react'
import './App.css'

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

  }

  handleReset () {

  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to my awsome pomodoro time</h1>
          <h2>00:00:00</h2>
          <h2>
            <span>{this.state.minute}</span>
            <span>:</span>
            <span>{this.state.second === 0 ? '00' : this.state.second < 10 ? '0' + this.state.second : this.state.second}</span>
          </h2>
          <div className='timerButtons'>
            <button onClick={this.handlePlay.bind(this)}>Start</button>
            <button onClick={this.handleStop.bind(this)}>Stop</button>
            <button onClick={this.handleReset.bind(this)}>Refresh</button>
          </div>
        </header>
        <div />
      </div>)
  }
}

export default App
