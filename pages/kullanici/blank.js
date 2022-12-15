import dynamic from "next/dynamic"
import Head from "next/head"
import Script from "next/script"
import React from "react"
import Chart from "../../components/kullanici/Chart"
import Doctors from "../../components/kullanici/Doctors"
import Footer from "../../components/kullanici/Footer"
import HealthList from "../../components/kullanici/HealthList"
import Log from "../../components/kullanici/Log"
import MenuButton from "../../components/kullanici/MenuButton"
import RaporHeader from "../../components/kullanici/RaporHeader"
import Sidebar from "../../components/kullanici/Sidebar"
function Danisan() {
  const sidebarRef = React.useRef()

  const handleSidebarClick = () => {
    sidebarRef.current.classList.remove("hidden")
    sidebarRef.current.classList.add("open")
  }

  $(document).ready(function () {
    $(document).on("click", function (e) {
      if (
        e.target.id != "toggleSidebarMobileHamburger" &&
        e.target.id != "toggleSidebarMobile" &&
        e.target.id != "sidebar" &&
        e.target.id != "toggleSidebarMobileClose"
      ) {
        if ($(e.target).closest("#sidebar").length == 0) {
          $("#sidebar").removeClass("open")
          $("#sidebar").addClass("hidden")
        }
      }
    })
  })

  return (
    <>
      <div>
        <div>
          <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <MenuButton handleSidebarClick={handleSidebarClick} />
                  <a
                    href="#"
                    className="text-xl font-bold flex items-center lg:ml-2.5"
                  >
                    <img
                      src="https://demo.themesberg.com/windster/images/logo.svg"
                      className="h-6 mr-2"
                      alt="Windster Logo"
                    />
                    <span className="self-center whitespace-nowrap">
                      Health Tourism
                    </span>
                  </a>
                  {/* Search */}
                  {/* <form
                    action="#"
                    method="GET"
                    className="hidden lg:block lg:pl-32"
                  >
                    <label htmlFor="topbar-search" className="sr-only">
                      Search
                    </label>
                    <div className="mt-1 relative lg:w-64">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="topbar-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form> */}
                </div>

                <div></div>
              </div>
            </div>
          </nav>
          <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar sidebarRef={sidebarRef} />
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
            >
              <main>
                <div className="pt-6 px-4">
                  <div className="w-full grid grid-cols-1  gap-4">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2"></div>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(Danisan), { ssr: false })
