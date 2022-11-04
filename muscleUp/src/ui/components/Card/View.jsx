import React from 'react'

const Card = children => {
  const { data } = children
  const { name, current_weight, max_weight, min_weight, rate, sets, rm1 } = data
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
          <div className="p-4">
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Time
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              1:00
            </h5>
          </div>
          <div className="p-4">
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Rest Time
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              1:00
            </h5>
          </div>
          <div className="p-4">
            <div className="">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Start
              </button>
            </div>
            <div className="pt-2">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
