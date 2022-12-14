import React from "react"

export default function Cart({ count, title, logo }) {
  return (
    <div className="mb-2">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {count}
            </span>
            <h3 className="text-base font-normal text-gray-500">{title}</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            {logo}
          </div>
        </div>
      </div>
    </div>
  )
}
