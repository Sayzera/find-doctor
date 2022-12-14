import React from "react"
import { AiOutlineFieldTime } from "react-icons/ai"
import { ImLocation } from "react-icons/im"
import { MdOutlineSpeakerNotes } from "react-icons/md"
export default function YaklasanRandevular() {
  return (
    <div>
      <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center md:space-x-3">
            <h5 className="text-md-ld md:text-xl font-bold leading-none text-gray-900 dark:text-white">
              DR. Sezer Bölük{" "}
            </h5>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Genel Cerrahi
            </span>
          </div>

          <a
            href="#"
            className="text-sm font-medium text-red-600 hover:underline dark:text-blue-500"
          >
            İPTAL ET
          </a>
        </div>
        <div className="flow-root">
          <div className="border-b  pb-2  md:flex items-center justify-between">
            <div className="flex items-center space-x-5 ">
              <AiOutlineFieldTime size={30} className="text-gray-700" />{" "}
              <span className="ml-2 font-medium">Tarih / Zaman : </span>
              <span className="font-medium">13.12.2022 / 13:00</span>
            </div>

            <div className="text-center mt-1 md:text-left md:mt-0">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                1 gün 2 saat 30 dakika kaldı
              </span>
            </div>
          </div>
          <div className="border-b  pb-2 flex items-center space-x-5 mt-2 ">
            <ImLocation className="text-gray-700" size={30} />{" "}
            <span className="ml-2 font-medium">Doktorunuzun Adresi:</span>
            <span className="font-medium">
              Teknopark Ankara İvedik OSB Mh. 2224 Cad. No:1/203 C Bl. K:8
              D:814-815-816 Yenimahalle / ANKARA
            </span>
          </div>

          <div className="border-b  pb-2 flex items-center space-x-5 mt-2 ">
            <MdOutlineSpeakerNotes size={30} className="text-gray-700" />{" "}
            <span className="ml-2 font-medium">Randevu Notunuz : </span>
            <span className="font-medium">Baş ağrısı ve burun tıkanıklığı</span>
          </div>
        </div>
      </div>
    </div>
  )
}
