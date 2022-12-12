import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectDoktorName } from "../../redux/bookNowSlice"
import { setMask } from "../../redux/generalSlice"
import { FaHospitalUser } from "react-icons/fa"
import useLang from "../../hook/lang"
import { toast } from "react-toastify"

import ReactStars from "react-rating-stars-component"

export default function ReviewsDrawer() {
  const dispatch = useDispatch()
  const lang = useLang()
  const doktorName = useSelector(selectDoktorName)

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  const handlerBookNow = (e) => {
    toast.success(lang["Yorumunuz başarıyla gönderildi. Teşekkür ederiz"], {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    dispatch(setMask(false))
  }

  return (
    <div>
      <div
        id="doktor-reviews-drawer"
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="doktor-reviews-drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <FaHospitalUser size={25} className="mr-2" />
          {doktorName}
        </h5>
        <button
          type="button"
          data-drawer-dismiss="doktor-reviews-drawer"
          onClick={() => {
            dispatch(setMask(false))
          }}
          aria-controls="doktor-reviews-drawer"
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
          <span className="sr-only">Close menu</span>
        </button>
        <form action="#" className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {lang["Yorumunuz"]}
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-6 border-b">
            <label
              htmlFor="message"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              {lang["Genel Değerlendirme"]}
            </label>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              activeColor="#ffd700"
            />
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
            data-drawer-dismiss="doktor-reviews-drawer"
            aria-controls="doktor-reviews-drawer"
            onClick={() => {
              handlerBookNow()
            }}
          >
            {lang["Yorumu Gönder"]}
          </button>

          <button
            type="button"
            data-drawer-dismiss="doktor-reviews-drawer"
            aria-controls="doktor-reviews-drawer"
            onClick={() => {
              dispatch(setMask(false))
            }}
            className="text-gray-700 bg-white w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
          >
            {lang["Kapat"]}
          </button>
        </form>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">
            sezer.boluk@niltekyazilim.com.tr
          </a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">
            0555 555 55 55
          </a>
        </p>
      </div>
    </div>
  )
}
