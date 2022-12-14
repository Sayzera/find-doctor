import React from "react"
import Footer from "./Footer"
import MenuButton from "./MenuButton"
import Sidebar from "./Sidebar"
import $ from "jquery"
import { MdMarkEmailUnread } from "react-icons/md"
import { TbBellRinging } from "react-icons/tb"
import { fileLoader } from "../../helper/utils"
import { ConfirmPopup } from "primereact/confirmpopup"
function Layout({ children, title = "Health Tourism" }) {
  const sidebarRef = React.useRef()

  React.useEffect(() => {
    fileLoader("/assets/js/flowbite.js")
  })

  const handleSidebarClick = () => {
    sidebarRef.current.classList.remove("hidden")
    sidebarRef.current.classList.add("open")
  }

  if (typeof window !== "undefined") {
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
  }

  return (
    <>
      <div>
        <ConfirmPopup />
        <div className="h-screen bg-gray-50 ">
          <nav className="bg-[#3F4079]  fixed z-30 w-full">
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
                    <span className="self-center whitespace-nowrap text-white">
                      Health Tourism
                    </span>
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <MdMarkEmailUnread className="text-white" size={30} />
                  <TbBellRinging className="text-white" size={30} />
                </div>
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
                <div className="pt-6 px-4 ">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
