import React from "react"
import { selectLang } from "../../../redux/langSlice"
import { useSelector } from "react-redux"
export default function Properties() {
  const lang = useSelector(selectLang)
  return (
    <div>
      <div className="container margin_120_95">
        <div className="main_title">
          <h2>{lang["Online olarak kolayca randevu alın"]}</h2>
          <p>
            {
              lang[
                "Artık randevu almak çok kolay! healthTourism ile kolayca randevu alabilirsiniz."
              ]
            }
          </p>
        </div>
        <div className="row add_bottom_30">
          <div className="col-lg-4">
            <div className="box_feat h-100" id="icon_1">
              <span></span>
              <h3>{lang["Doktor Bul"]}</h3>
              <p>
                {lang["healthTourism ile doktorunuza kolayca ulaşabilirsiniz."]}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box_feat h-100" id="icon_2">
              <span></span>
              <h3>{lang["Profili Görüntüle"]}</h3>
              <p>
                {
                  lang[
                    "Doktorunuzun bilgilerini, yorumlarını ve randevu alabileceğiniz saatleri görüntüleyebilirsiniz."
                  ]
                }
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="box_feat h-100" id="icon_3">
              <h3>{lang["Ziyaret Edin"]}</h3>
              <p>
                {
                  lang[
                    'Sırada beklemek yerine, "Doktoru Bul" butonuna tıklayarak doktorunuza hemen ulaşabilirsiniz.'
                  ]
                }
              </p>
            </div>
          </div>
        </div>
        {/*  /row  */}
        <p className="text-center">
          <a href="list.html" className="btn_1 medium">
            {lang["Doktoru Bul"]}
          </a>
        </p>
      </div>
    </div>
  )
}
