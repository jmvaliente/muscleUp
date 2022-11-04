import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Card = children => {
  const { data } = children
  const { name, current_weight, max_weight, min_weight, rate, sets, rm1 } = data
  const [isPlaying, setIsPlaying] = useState(true)
  const [key, setKey] = useState(0)

  const handleClick = () => {
    setIsPlaying(true)
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
        <div>
          <div className="pl-4">
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Weight
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap flex-row justify-between pt-2 pr-4 pl-4 pb-4">
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Max
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${(max_weight * rate) / 100 + max_weight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Min
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${(min_weight * rate) / 100 + min_weight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Current
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${(current_weight * rate) / 100 + current_weight} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Rate/Sem
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${rate}%`}
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap flex-row justify-around p-2 pr-4 pl-4 pb-4">
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              1RM
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${rm1} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Sets
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${sets} reps`}
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="p-4" onClick={() => handleClick()}>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={10}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              key={key}
              onComplete={() => {
                setKey(prevKey => prevKey + 1)
                setIsPlaying(false)
              }}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
