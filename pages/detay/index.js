import dynamic from "next/dynamic"
import { BsTelephone } from "react-icons/bs"
import { BsCameraVideo } from "react-icons/bs"
import { TbMessageCircle2 } from "react-icons/tb"

import React from "react"
import Layout from "../../components/web/Layout"
import useLang from "../../hook/lang"
import Popover from "../../components/popover/Popover"

import badge from "../../public/assets/img/badges/badge_1.svg"
import Image from "next/image"
import BookNowDrawer from "../../components/drawers/BookNowDrawer"
import GeneralTab from "../../components/web/detay/GeneralTab"
import ReviewsTab from "../../components/web/detay/ReviewsTab"
import BookTab from "../../components/web/detay/BookTab"
import { useDispatch } from "react-redux"
import ReviewsDrawer from "../../components/drawers/ReviewsDrawer"
function DoctorDetail() {
  const lang = useLang()

  return (
    <>
      <BookNowDrawer />
      <ReviewsDrawer />
      <Layout toTop={false}>
        <main>
          <div id="breadcrumb" className="relative">
            <div className="container">
              <ul>
                <li>
                  <a href="#">{lang["Anasayfa"]}</a>
                </li>
                <li>
                  <a href="#">{lang["Doktorlar"]}</a>
                </li>
                <li>Sezer Bölük</li>
              </ul>
            </div>
          </div>
          {/* /breadcrumb */}

          <div className="container margin_60">
            <div className="row">
              <aside className="col-xl-3 col-lg-4" id="sidebar">
                <div className="box_profile">
                  <figure>
                    <img
                      src="http://via.placeholder.com/565x565.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <small>{lang["Genel Cerrahi"]}</small>
                  <h1>Dr. Sezer Bölük</h1>
                  <span className="rating">
                    <i className="icon_star voted"></i>
                    <i className="icon_star voted"></i>
                    <i className="icon_star voted"></i>
                    <i className="icon_star voted"></i>
                    <i className="icon_star"></i>
                    <small>(145)</small>
                    <a
                      href="badges.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Badge Level"
                      className="badge_list_1"
                    >
                      <div className="flex items-center space-x-3">
                        <Image src={badge} alt="badge" width={15} height={15} />
                        &nbsp;5&nbsp;
                        {lang["Değerlendirme"]}
                      </div>
                    </a>
                  </span>
                  <ul className="statistic">
                    <li>854 {lang["Görüntülenme"]} </li>
                    <li className="ml-1">124 {lang["Hasta"]}</li>
                  </ul>
                  <ul className="contacts">
                    <li>
                      <h6>{lang["Adres"]}</h6>
                      Teknopark Ankara İvedik OSB Mh. 2224 Cad. No:1/203 C Bl.
                      K:8 D:814-815-816 Yenimahalle / ANKARA
                    </li>
                    <li>
                      <h6>{lang["Telefon"]}</h6>
                      <a href="tel://000434323342">0(312) 284 85 90</a>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                      className="btn_1 outline"
                      target="_blank"
                    >
                      <i className="icon_pin"></i> {lang["Haritada Göster"]}
                    </a>
                  </div>
                </div>
              </aside>
              {/* /asdide */}

              <div className="col-xl-9 col-lg-8">
                <div className="tabs_styled_2">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="book-tab"
                        data-toggle="tab"
                        href="#book"
                        role="tab"
                        aria-controls="book"
                      >
                        {lang["Randevu Al"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="general-tab"
                        data-toggle="tab"
                        href="#general"
                        role="tab"
                        aria-controls="general"
                        aria-expanded="true"
                      >
                        {lang["Genel Bilgiler"]}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="reviews-tab"
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                        aria-controls="reviews"
                      >
                        {lang["Yorumlar"]}
                      </a>
                    </li>
                  </ul>
                  {/*/nav-tabs */}

                  <div className="tab-content">
                    {/* Tab - 1 */}
                    <BookTab />
                    {/* Tab - 2 */}
                    <GeneralTab />
                    {/* Tab -3 */}
                    <ReviewsTab />
                    {/* /tab_3 */}
                  </div>
                  {/* /tab-content */}
                </div>
                {/* /tabs_styled */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}

          <div className="fixed bottom-0  h-30 px-2 w-full bg-gray-100 py-2  rounded-md">
            <div className="flex justify-center space-x-5">
              <Popover
                title={lang["Arama Yap"]}
                content={
                  "Hızlı bir şekilde tıklayıp doktorumuza ulaşabilirsiniz"
                }
                id="doktoru-ara"
              />
              <BsTelephone
                size={40}
                data-popover-target="doktoru-ara"
                className="cursor-pointer"
              />

              <Popover
                title={lang["Canlı Görüşme"]}
                content={
                  lang[
                    "Hızlı bir şekilde tıklayıp doktorumuzla canlı görüşme yapabilirsiniz"
                  ]
                }
                id="doktoru-online-ara"
              />

              <BsCameraVideo
                size={40}
                data-popover-target="doktoru-online-ara"
                className="cursor-pointer"
              />
              <Popover
                title={lang["Mesaj Gönder"]}
                content={
                  lang[
                    "Hızlı bir şekilde tıklayıp doktorumuza mesaj gönderebilirsiniz"
                  ]
                }
                id="doktora-mesaj-at"
              />

              <TbMessageCircle2
                size={40}
                data-popover-target="doktora-mesaj-at"
                className="cursor-pointer"
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default dynamic(() => Promise.resolve(DoctorDetail), {
  ssr: false,
})
