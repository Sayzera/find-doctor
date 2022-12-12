import dynamic from "next/dynamic"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { selectLang } from "../../../redux/langSlice"

function MostPopulerDoctors() {
  const lang = useSelector(selectLang)
  return (
    <div>
      <div className="bg_color_1">
        <div className="container margin_120_95">
          <div className="main_title">
            <h2>{lang["En çok aranan doktorlar"]}</h2>
            <p>
              {
                lang[
                  "En çok aranan doktorlar aşağıda listelenmektedir uzerine tıklayarak kolayca profil sayfasına ulaşabilirsiniz"
                ]
              }
            </p>
          </div>
          <div id="reccomended" className="owl-carousel owl-theme">
            <div className="item">
              <Link href="/detay">
                <div className="views">
                  <i className="icon-eye-7"></i>140
                </div>
                <div className="title">
                  <h4>
                    Dr. Julia Holmes<em>Pediatrician - Cardiologist</em>
                  </h4>
                </div>
                <img src="http://via.placeholder.com/350x500.jpg" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link href="/detay">
                <div className="views">
                  <i className="icon-eye-7"></i>120
                </div>
                <div className="title">
                  <h4>
                    Dr. Julia Holmes<em>Pediatrician</em>
                  </h4>
                </div>
                <img src="http://via.placeholder.com/350x500.jpg" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link href="/detay">
                <div className="views">
                  <i className="icon-eye-7"></i>115
                </div>
                <div className="title">
                  <h4>
                    Dr. Julia Holmes<em>Pediatrician</em>
                  </h4>
                </div>
                <img src="http://via.placeholder.com/350x500.jpg" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link href="/detay">
                <div className="views">
                  <i className="icon-eye-7"></i>98
                </div>
                <div className="title">
                  <h4>
                    Dr. Julia Holmes<em>Pediatrician</em>
                  </h4>
                </div>
                <img src="http://via.placeholder.com/350x500.jpg" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link href="/detay">
                <div className="views">
                  <i className="icon-eye-7"></i>98
                </div>
                <div className="title">
                  <h4>
                    Dr. Julia Holmes<em>Pediatrician</em>
                  </h4>
                </div>
                <img src="http://via.placeholder.com/350x500.jpg" alt="" />
              </Link>
            </div>
          </div>
          {/*  /carousel  */}
        </div>
        {/*  /container  */}
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(MostPopulerDoctors), {
  ssr: false,
})
