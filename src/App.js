import React, { Component } from 'react'
import './App.css'
import TomatoButton from './TomatoButton'

class App extends Component {
  state = {
    minutes: 25
  }

  handleStartTimer () {
    const fiveMinutes = 60 * this.state.minutes
    const display = document.querySelector('#time')
    this.startTimer(fiveMinutes, display)
  }

  startTimer (duration, display) {
    let timer = duration; let minutes; let seconds
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      display.textContent = minutes + ':' + seconds

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)
  }

  handlePauseTimer () {
    console.log('pause timer')
  }

  handleStopTimer () {
    console.log('stop timer')
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to my awsome pomodoro time</h1>
        </header>
        <div>
        <div>Focus on task for <span id='time'>25:00</span> minutes!</div>
          <button name='start' onClick={this.handleStartTimer.bind(this)}>Start</button>
          <button name='pause' onClick={this.handlePauseTimer.bind(this)}>Pause</button>
          <button name='reset' onClick={this.handleStopTimer.bind(this)}>Reset</button>
        </div>
      </div>)
  }
}

export default App
