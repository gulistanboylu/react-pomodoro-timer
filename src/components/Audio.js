import React, { Component } from 'react'

class Audio extends Component {
  componentDidMount () {
    const audioEl = document.getElementsByClassName('audio-element')[0]
    audioEl.play()
  }

  playAudio () {
    const audioEl = document.getElementsByClassName('audio-element')[0]
    audioEl.play()
  }

  render () {
    return (
      <div>
        <audio className='audio-element'>
          <source src='./notificattion.mp3' />
        </audio>
      </div>
    )
  }
}

export default Audio
