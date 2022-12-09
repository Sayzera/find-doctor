import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { MdLanguage } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { setMask } from "../../redux/generalSlice"
import { selectLang } from "../../redux/langSlice"
import { toastMessage } from "../../utils/toastMessages"

export default function LangDrawer() {
  const lang = useSelector(selectLang)
  const dispatch = useDispatch()

  const { pathname } = useRouter()

  return (
    <div>
      <div
        id="drawer-lang"
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
        style={{
          zIndex: 999,
        }}
      >
        <div className="border-b border-gray-300 flex items-center pb-2 text-gray-700">
          <MdLanguage size={40} />
          <h5
            id="drawer-right-label"
            className="inline-flex items-center  text-base font-semibold text-gray-700 "
          >
            <span className="ml-3 text-lg ">{lang["Dil Seç"]}</span>
          </h5>
        </div>
        <button
          type="button"
          data-drawer-dismiss="drawer-lang"
          aria-controls="drawer-lang"
          onClick={() => {
            dispatch(setMask(false))
          }}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only ml-2">Close menu</span>
        </button>
        {/* content */}
        <div className="py-2 mt-2">
          <div className="mb-2 text-lg border-b border-gray-300 py-2">
            <Link
              href={pathname}
              locale="tr"
              data-drawer-dismiss="drawer-lang"
              aria-controls="drawer-lang"
              onClick={() => {
                dispatch(setMask(false))
                toastMessage("success", "Türkçe dil seçildi.", "top-center")
              }}
            >
              Türkçe
            </Link>
          </div>
          <div className="mb-2 text-lg border-b border-gray-300 py-2">
            <Link
              href={pathname}
              locale="en"
              data-drawer-dismiss="drawer-lang"
              aria-controls="drawer-lang"
              onClick={() => {
                dispatch(setMask(false))
                toastMessage(
                  "success",
                  "English language selected.",
                  "top-center"
                )
              }}
            >
              English
            </Link>
          </div>
          {/* 
          <div className="mb-2 text-lg border-b border-gray-300 py-2">
            <Link
              href="/"
              locale="ar"
              data-drawer-dismiss="drawer-lang"
              aria-controls="drawer-lang"
              onClick={() => {
                dispatch(setMask(false))
              }}
            >
              Arabic
            </Link>
          </div> */}

          <div>
            <button
              type="button"
              data-drawer-dismiss="drawer-lang"
              aria-controls="drawer-lang"
              onClick={() => {
                dispatch(setMask(false))
              }}
              className="w-full py-2.5 px-5 mr-2 mb-2 mt-4 text-lg  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {lang["Kapat"]}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
