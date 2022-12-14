import React from "react"

export default function Yorumlar() {
  return (
    <div className="overflow-x-auto h-4/6">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=2000"
              alt="Bonnie image"
            />
          </span>
          <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              Az önce eklendi
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
              Sezer hoca harika bir doktor. Kendisine çok teşekkür ederim.
            </div>
          </div>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=2000"
              alt="Thomas Lean image"
            />
          </span>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="justify-between items-center mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                2 saat önce eklendi
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Cebrail bey, güler yüzlü ve çok ilgili bir doktor teşekkürler{" "}
              </div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              Teşekkür ederim Ebru hanım
            </div>
          </div>
        </li>

        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=2000"
              alt="Thomas Lean image"
            />
          </span>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="justify-between items-center mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                2 saat önce eklendi
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Cebrail bey, güler yüzlü ve çok ilgili bir doktor teşekkürler{" "}
              </div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              Teşekkür ederim Ebru hanım
            </div>
          </div>
        </li>
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=2000"
              alt="Thomas Lean image"
            />
          </span>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="justify-between items-center mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                2 saat önce eklendi
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Cebrail bey, güler yüzlü ve çok ilgili bir doktor teşekkürler{" "}
              </div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              Teşekkür ederim Ebru hanım
            </div>
          </div>
        </li>
        <li className="ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=2000"
              alt="Jese Leos image"
            />
          </span>
          <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              1 gün önce eklendi
            </time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
              Harika bir hizmet ve ilgi teşekkürler
            </div>
          </div>
        </li>
      </ol>
    </div>
  )
}
