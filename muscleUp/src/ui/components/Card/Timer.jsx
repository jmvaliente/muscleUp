import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './styles.css'

const Timer = ({ props }) => {
  const { restTime, weightForSets, currentSet, setCurrentSet } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Finish</div>
    }
    return (
      <div className="timer">
        <div className="text">Push</div>
        <div className="text">Rest Time</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    )
  }
  return (
    <div onClick={() => handleClick()}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={restTime}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[restTime, restTime / 33, restTime / 66, restTime / 99]}
        key={key}
        onComplete={() => {
          if (weightForSets[currentSet].set > 1) {
            setCurrentSet(prevSet => prevSet + 1)
            setKey(prevKey => prevKey + 1)
          }
          setIsPlaying(false)
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

Timer.propTypes = {
  props: PropTypes.object,
  restTime: PropTypes.number,
  weightForSets: PropTypes.arrayOf(PropTypes.object),
  currentSet: PropTypes.number,
  setCurrentSet: PropTypes.func,
}

export default Timer
