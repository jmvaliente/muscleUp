import React from 'react'

const Card = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="rounded-xl shadow-lg bg-white max-w-sm">
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
        <div className="flex flex-row justify-between pt-2 pr-4 pl-4 pb-4">
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Max
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${50 * 0.02 + 50} Kg`}
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${50} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Min
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${35 * 0.02 + 35} Kg`}
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${35} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Current
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${45 * 0.02 + 45} Kg`}
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${45} Kg`}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              Rate/Sem
            </h5>
            <h5 className="text-gray-900 text-lg font-medium mb-2 basis-full">
              {`${2}%`}
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
