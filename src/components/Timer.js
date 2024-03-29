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
        <div className='timer-wrapper'>
          <div className='timer'>
            <h1>
              <span>{this.state.minute}</span>
              <span>:</span>
              <span>{this.state.second === 0 ? '00' : this.state.second < 10 ? '0' + this.state.second : this.state.second}</span>
            </h1>

            <div className='status-message'>
              {
                (this.state.workOrBreak === 'work')
                  ? <h3>Time for focus!</h3> : <h3>Time for break!</h3>
              }
            </div>
          </div>
        </div>
        <div className='timerButtons'>
          <button onClick={this.handlePlay.bind(this)}><img src='./tomato.png' />START</button>
          <button onClick={this.handleStop.bind(this)}><img src='./break.png' />STOP</button>
          <button onClick={this.handleReset.bind(this)}><img src='./reset.png' />RESET</button>
        </div>
        <div className='pomodoro-count'>You have completed <span className='number'>{this.state.pomodoroCounter} </span>pomodoro.</div>
      </div>)
  }
}

export default Timer
