import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="w-[350px] bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">

        {/* Top */}
        <div className="flex items-center justify-between">
          <img
            className="h-15 w-12 object-contain rounded-lg"
            src={props.image}
            alt="Amazon"
          />

          <button className="border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition">
            Save
          </button>
        </div>

        {/* Center */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-500">
            {props.company}
          </h3>

          <h2 className="text-xl font-semibold text-gray-900 mt-1">
            {props.role}
          </h2>

          <div className="flex gap-2 mt-4">
            <h4 className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md">
              Part time
            </h4>

            <h4 className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md">
              Senior level
            </h4>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 pt-4 border-t border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              {props.pay}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {props.location}
            </p>
          </div>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition">
            Apply
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card