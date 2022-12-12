import dynamic from "next/dynamic"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Script from "next/script"
import React from "react"
import Layout from "../components/web/Layout"
import { fileLoader } from "../helper/utils"
import useLang from "../hook/lang"

/**
 * Doktorların listelendiği, kullanıcıların doktor bulabileceği ve aramadan gidebileceği bir sayfadır.
 */

function DoctorsScreen() {
  const lang = useLang()
  const router = useRouter()

  React.useEffect(() => {
    return () => {
      fileLoader("http://maps.googleapis.com/maps/api/js", false)
      fileLoader("/assets/js/markerclusterer.js", false)
      fileLoader("/assets/js/map_listing.js", false)
      fileLoader("/assets/js/infobox.js", false)
    }
  }, [router])
  return (
    <Layout>
      <div>
        <main>
          <div id="results">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h4>{lang["Toplamda 250 doktor bulundu."]}</h4>
                </div>
                <div className="col-md-6">
                  <div className="search_bar_list">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        lang["Doktor adı veya uzmanlık alanı ile arayın."]
                      }
                    />
                    <input type="submit" value={lang["Ara"]} />
                  </div>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /results */}

          <div className="filters_listing">
            <div className="container">
              <ul className="clearfix">
                <li>
                  <h6>{lang["Türü"]}</h6>
                  <div className="switch-field">
                    <input
                      type="radio"
                      id="all"
                      name="type_patient"
                      value="all"
                      defaultChecked
                    />
                    <label htmlFor="all">{lang["Tümü"]}</label>
                    <input
                      type="radio"
                      id="doctors"
                      name="type_patient"
                      value="doctors"
                    />
                    <label htmlFor="doctors">{lang["Doktorlar"]}</label>
                    <input
                      type="radio"
                      id="clinics"
                      name="type_patient"
                      value="clinics"
                    />
                    <label htmlFor="clinics">{lang["Uzmanlıklar"]}</label>
                  </div>
                </li>
                <li>
                  <h6>{lang["Düzen"]}</h6>
                  <div className="layout_view">
                    <Link href="#" className="active">
                      <i className="icon-th"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon-th-list"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon-map-1"></i>
                    </Link>
                  </div>
                </li>
                <li>
                  <h6>{lang["Gelişmiş Sıralama"]}</h6>
                  <select name="orderby" className="selectbox">
                    <option value="Closest">{lang["Yakınımdakiler"]}</option>
                    <option value="Best rated">
                      {lang["En Çok Oy Alanlar"]}
                    </option>
                    <option value="Men">{lang["Erkek Doktorlar"]}</option>
                    <option value="Women">{lang["Kadın Doktorlar"]}</option>
                  </select>
                </li>
              </ul>
            </div>
            {/* /container */}
          </div>
          {/* /filters */}

          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Sickman</h3>

                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_1.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}

                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Will Griever</h3>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_2.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#0">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                            target="_blank"
                          >
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}

                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#0" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Pediatrician</small>
                        <h3>Dr. Jhoanna Steel</h3>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="badges.html"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_3.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#0">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                            target="_blank"
                          >
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}

                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#0" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Pediatrician</small>
                        <h3>Dr. Slaughter</h3>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="badges.html"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_3.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#0">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                            target="_blank"
                          >
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}

                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#0" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Watchmaker</h3>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="badges.html"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_4.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#0">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                            target="_blank"
                          >
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}

                  <div className="col-md-6">
                    <div className="box_list wow fadeIn">
                      <Link href="#0" className="wish_bt"></Link>
                      <figure>
                        <Link href="/detay">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="preview">
                            <span>{lang["Daha Fazla"]}</span>
                          </div>
                        </Link>
                      </figure>
                      <div className="wrapper">
                        <small>Psicologist - Pediatrician</small>
                        <h3>Dr. Sunshine</h3>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cuodo....
                        </p>
                        <span className="rating">
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star voted"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i> <small>(145)</small>
                        </span>
                        <Link
                          href="badges.html"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_4.svg"
                            width="15"
                            height="15"
                            alt=""
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link href="#0">
                            <i className="icon_pin_alt"></i>
                            {lang["Haritada Göster"]}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                            target="_blank"
                          >
                            <i className="icon_pin_alt"></i>Directions
                          </Link>
                        </li>
                        <li>
                          <Link href="/detay">{lang["Randevu Al"]}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /box_list */}
                </div>
                {/* /row */}

                <nav aria-label="" className="add_top_20">
                  <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#" tabIndex="-1">
                        {lang["Önceki"]}
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        {lang["Sonraki"]}
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /pagination */}
              </div>
              {/* /col */}

              <aside className="col-lg-4" id="sidebar">
                <div id="map_listing" className="normal_list"></div>
              </aside>
              {/* /aside */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </main>
        {/* /main */}
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(DoctorsScreen), {
  ssr: false,
})
