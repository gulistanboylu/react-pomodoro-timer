import React, { Component } from 'react'
import './App.css'
import TomatoButton from './TomatoButton'

class App extends Component {
  state = {
    minutes: 25
  }
  handleStartTimer () {
    console.log('timer is starting')
  }

  handlePauseTimer () {
    console.log('pause timer')
  }

  handleStopTimer () {
    console.log('stop timer')
  }

  componentDidMount () {
    console.log('MOUNTED')
    console.log(this.state.minutes)
    function startTimer (duration, display) {
      var timer = duration; var minutes; var seconds
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

    let minutes = this.state.minutes
    window.onload = function () {
     
      var fiveMinutes = 60 * minutes
      var display = document.querySelector('#time')
      startTimer(fiveMinutes, display)
    }
  }

  render () {
    return (
      <div className='App'>
        <h1>testing testing</h1>
        <header className='App-header'>
          <p>
           Welcome to my awesome pomodoro timer! :D
          </p>
          <div>Focus on task for <span id='time'>25:00</span> minutes!</div>
          <div>Time left = <span id='timer' /></div>
          <button name='start' onClick={this.handleStartTimer} />
          <button name='pause' onClick={this.handlePauseTimer} />
          <button name='reset' onClick={this.handleStopTimer} />
        </header>
      </div>)
  }
}

export default App
