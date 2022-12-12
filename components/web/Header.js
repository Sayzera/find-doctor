import dynamic from "next/dynamic"
import Link from "next/link"
import React, { useTransition } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectLang } from "../../redux/langSlice"
import { MdLanguage } from "react-icons/md"
import { SlUser } from "react-icons/sl"
import { AiOutlineMenu } from "react-icons/ai"

import LangDrawer from "../drawers/langDrawer"
import MenuDrawer from "../drawers/menuDrawer"
import { setMask } from "../../redux/generalSlice"
import { Tooltip } from "flowbite-react"
import { useRouter } from "next/router"

function Header() {
  const lang = useSelector(selectLang)
  const dispatch = useDispatch()
  const { locale } = useRouter()
  return (
    <div>
      <LangDrawer />
      <MenuDrawer />
      <header className="header_sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div id="logo_home">
                <h1>
                  <Link title="Findoctor" href={"/"}>
                    Health Tourism
                  </Link>
                </h1>
              </div>
            </div>
            <nav className="col-lg-9 col-6">
              {/* <a
                className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href="#0"
              >
                <span>Menu mobile</span>
              </a> */}
              <ul id="top_access">
                <li className="cursor-pointer">
                  <Tooltip
                    content={lang["Üzerine tıklayıp dil seçebilirsiniz"]}
                    style="light"
                    placement="left"
                  >
                    <MdLanguage
                      data-drawer-target="drawer-lang"
                      data-drawer-show="drawer-lang"
                      data-drawer-placement="right"
                      aria-controls="drawer-lang"
                      className="text-gray-700"
                      data-drawer-backdrop="false"
                      size={33}
                      onClick={() => {
                        dispatch(setMask(true))
                      }}
                    />
                  </Tooltip>
                </li>
                <li>
                  <Link href={"/login"} locale={locale}>
                    <SlUser className="text-gray-700" size={33} />
                  </Link>
                </li>
                <li>
                  <AiOutlineMenu
                    data-drawer-target="drawer-navigation"
                    data-drawer-placement="right"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                    data-drawer-backdrop="false"
                    size={33}
                    onClick={() => {
                      dispatch(setMask(true))
                    }}
                  />
                </li>
              </ul>
              {/* 
              <div className="main-menu">
                <ul>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Home<i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Home Default</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Version 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Version 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Version 4</a>
                      </li>
                      <li>
                        <a href="index-7.html">Home with Map</a>
                      </li>
                      <li>
                        <a href="index-6.html">Revolution Slider</a>
                      </li>
                      <li>
                        <a href="index-5.html">With Cookie Bar (EU law)</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Pages<i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li className="third-level">
                        <a href="#0">List pages</a>
                        <ul>
                          <li>
                            <a href="list.html">List page</a>
                          </li>
                          <li>
                            <a href="grid-list.html">List grid page</a>
                          </li>
                          <li>
                            <a href="list-map.html">List map page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="third-level">
                        <a href="#0">Detail pages</a>
                        <ul>
                          <li>
                            <a href="detail-page.html">Detail page 1</a>
                          </li>
                          <li>
                            <a href="detail-page-2.html">Detail page 2</a>
                          </li>
                          <li>
                            <a href="detail-page-3.html">Detail page 3</a>
                          </li>
                          <li>
                            <a href="detail-page-working-booking.html">
                              Detail working booking
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="submit-review.html">Submit Review</a>
                      </li>
                      <li>
                        <a href="blog-1.html">Blog</a>
                      </li>
                      <li>
                        <a href="badges.html">Badges</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="login-2.html">Login 2</a>
                      </li>
                      <li>
                        <a href="register-doctor.html">Register Doctor</a>
                      </li>
                      <li>
                        <a href="register-doctor-working.html">
                          Working doctor register
                        </a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Extra Elements<i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="booking-page.html">Booking page</a>
                      </li>
                      <li>
                        <a href="confirm.html">Confirm page</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq page</a>
                      </li>
                      <li>
                        <a href="coming_soon/index.html">Coming soon</a>
                      </li>
                      <li className="third-level">
                        <a href="#0">Pricing tables</a>
                        <ul>
                          <li>
                            <a href="pricing-tables-3.html">Pricing tables 1</a>
                          </li>
                          <li>
                            <a href="pricing-tables.html">Pricing tables 2</a>
                          </li>
                          <li>
                            <a href="pricing-tables-2.html">Pricing tables 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="icon-pack-1.html">Icon pack 1</a>
                      </li>
                      <li>
                        <a href="icon-pack-2.html">Icon pack 2</a>
                      </li>
                      <li>
                        <a href="icon-pack-3.html">Icon pack 3</a>
                      </li>
                      <li>
                        <a href="404.html">404 page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a
                      href="#0"
                      className="show-submenu border-b border-gray-400 p-1 bg-[#3F4079] text-white px-4"
                    >
                      {lang["Dil Seç"]}
                      <i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link href="/" locale="tr">
                          Türkçe
                        </Link>
                      </li>
                      <li>
                        <Link href="/" locale="en">
                          English
                        </Link>
                      </li>

                      <li>
                        <Link href="/" locale="ar">
                          Arabic
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div> */}
              {/*  /main-menu  */}
            </nav>
          </div>
        </div>
        {/*  /container  */}
      </header>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Header), {
  ssr: false,
})
