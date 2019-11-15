import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      minute: 25,
      second: 0,
      IntervalId: 0,
      pomodoroCounter: 0,
      workOrBreak: 'work'
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
        if (this.state.minute === 0) {
          if (this.state.workOrBreak === 'work') {
            this.setState({
              workOrBreak: 'break',
              minute: 5
            })

            this.setState((prevState) => {
              return {
                pomodoroCounter: prevState.pomodoroCounter + 1
              }
            })
          } else {
            this.setState({
              workOrBreak: 'work',
              minute: 25
            })
          }
        }
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
        {
          (this.state.workOrBreak === 'work')
            ? <h2>Time for focus!</h2> : <h2>Time for break!</h2>
        }
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
        <div>You have completed {this.state.pomodoroCounter} pomodoro.</div>
      </div>)
  }
}

export default Timer
