import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 60,
      minutes: 60 * 25
      // isPaused: false,
      // display: '25.00'
    }
  }

  handleStartTimer () {
    // this.timer = setInterval(() => this.setState({
    //   time: this.state.time - 1
    // }), 1000)
    this.timer = setInterval(() => this.setState({
      time: this.state.time - 1
    }), 1000)

    // this.setState({
    // minute = minute < 10 ? '0' + minute : minute,
    // seconds = seconds < 10 ? '0' + seconds : seconds
    // seconds = parseInt(timer % 60, 10)
    // }), 1000)
    // console.log(this.state.isPaused)
    // if (this.state.isPaused === false) {
    //   this.setState({
    //     isPaused: true
    //   })
    // }
    // if (this.state.isPaused === true) {
    //   this.setState({
    //     isPaused: false
    //   })
    // }

    // const twentyFiveMinutes = this.state.minutes
    // const display = document.querySelector('#time')

    // let timer = twentyFiveMinutes; let minutes; let seconds

    // setInterval(function () {
    //   // if (this.state.isPaused === true) {
    //   minutes = parseInt(timer / 60, 10)
    //   seconds = parseInt(timer % 60, 10)

    //   minutes = minutes < 10 ? '0' + minutes : minutes
    //   seconds = seconds < 10 ? '0' + seconds : seconds

    //   display.textContent = minutes + ':' + seconds

    //   if (--timer < 0) {
    //     timer = twentyFiveMinutes
    //     // }
    //   }
    // }, 1000)
  }

  handleStopTimer () {
    clearInterval(this.timer)
    console.log('pause timer')
  }

  handleResetTimer () {
    this.setState({ time: 60 })
    console.log('stop timer')
  }

  componentDidMount () {

  }

  componentDidUpdate () {
    console.log(this.state.time)
    // if (this.state.isPaused === false) {
    //   this.setState({
    //     isPaused: true
    //   })
    // }
    // if (this.state.isPaused === true) {
    //   this.setState({
    //     isPaused: false
    //   })
    // }

    // const twentyFiveMinutes = 60 * this.state.minutes
    // const display = document.querySelector('#time')

    // let timer = twentyFiveMinutes; let minutes; let seconds

    // setInterval(function () {
    //   if (this.state.isPaused === true) {
    //     minutes = parseInt(timer / 60, 10)
    //     seconds = parseInt(timer % 60, 10)

    //     minutes = minutes < 10 ? '0' + minutes : minutes
    //     seconds = seconds < 10 ? '0' + seconds : seconds

    //     display.textContent = minutes + ':' + seconds

    //     if (--timer < 0) {
    //       timer = twentyFiveMinutes
    //     }
    //   }
    // }, 1000)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to my awsome pomodoro time</h1>
          <h2>{this.state.time}</h2>
        </header>
        <div>
          {/* <div>Focus on task for <span id='time'>25:00</span> minutes!</div> */}
          {/* <div>Focus on task for <span id='time'>{this.state.display}</span></div> */}
          {/* <div>{this.state.minutes}</div> */}
          <button name='start' onClick={this.handleStartTimer.bind(this)}>Start/Pause</button>
          <button name='pause' onClick={this.handleStopTimer.bind(this)}>Pause</button>
          <button name='reset' onClick={this.handleResetTimer.bind(this)}>Reset</button>
        </div>
      </div>)
  }
}

export default App
