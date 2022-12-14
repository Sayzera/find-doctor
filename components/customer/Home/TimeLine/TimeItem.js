import React from "react"

export default function TimeItem({ data }) {
  return (
    <div>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#9a9bdb] rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-[#3F4079] dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <div className="flex items-center justify-between">
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {data.doctorName}{" "}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#9a9bdb] dark:text-blue-800 ml-3">
              {data.doctorBranch}
            </span>
          </h3>{" "}
          {data.last ? (
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-green-200 dark:text-green-900">
              En son randevu
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between my-2">
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {data.createdAt}
          </time>

          <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-purple-200 dark:text-purple-900">
            {data.date} / {data.time}
          </span>
        </div>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {data.note}
        </p>
      </li>
    </div>
  )
}
