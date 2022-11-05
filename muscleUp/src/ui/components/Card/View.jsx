import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import './styles.css'

const Card = children => {
  const { data, routine } = children
  const { name, restTime, reps, sets } = data
  const { maxWeight, minWeight, weightForSets } = routine
  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0)
  const [currentSet, setCurrentSet] = useState(0)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      //setTest(false)
      return <div className="timer">Start...</div>
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
    <div className="flex justify-center p-5">
      <div className="rounded-xl shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full text-center">
          {name}
        </h5>

        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://truefitness.com/wp-content/uploads/2015/12/FS-64-21_960.png"
            alt=""
          />
        </a>

        <div className="flex flex-wrap flex-row justify-around pt-2 pr-4 pl-4 pb-4">
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Max
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${maxWeight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Min
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${minWeight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Current
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${weightForSets[currentSet].weight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Reps
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {reps}
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-around p-6">
          <div onClick={() => handleClick()}>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={restTime}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
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
          <div className="flex flex-col justify-center p-6 flex-wrap">
            <div>
              <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
                Next Weight
              </h5>
              <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
                {weightForSets[currentSet + 1]
                  ? `${weightForSets[currentSet + 1].weight || 'Finish'} Kg`
                  : 'Finish'}
              </h5>
            </div>
            <div>
              <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
                Set
              </h5>
              <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
                {`${weightForSets[currentSet].set}/${sets}`}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
