import React from 'react'
import './App.css'
import TomatoButton from './TomatoButton'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Welcome to my awesome pomodoro timer! :D
        </p>
        <TomatoButton name='start' onClick={this.startTimer.bind(this)} />
        <TomatoButton name='pause' onClick={this.pauseTimer.bind(this)} />
        <TomatoButton name='reset' onClick={this.stopTimer.bind(this)} />
      </header>
    </div>
  )
}

export default App
