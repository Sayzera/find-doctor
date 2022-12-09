import Image from "next/image"
import React from "react"
import useLang from "../../hook/lang"
import logo from "../../public/assets/img/logo.png"

export default function Footer() {
  const lang = useLang()
  return (
    <div>
      <footer>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <p>
                <a href="index.html" title="Findoctor">
                  <Image
                    src={logo}
                    data-retina="true"
                    alt=""
                    width="163"
                    height="36"
                    className="img-fluid"
                  />
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>{lang["Hakkımızda"]}</h5>
              <ul className="links">
                <li>
                  <a href="#0">{lang["Biz Kimiz"]}</a>
                </li>
                <li>
                  <a href="blog.html">{lang["Blog"]}</a>
                </li>
                <li>
                  <a href="#0">{lang["Sıkça Sorulan Sorular"]}</a>
                </li>
                <li>
                  <a href="login.html">{lang["Giriş Yap"]}</a>
                </li>
                <li>
                  <a href="register.html">{lang["Kayıt Ol"]}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>{lang["Faydalı Linkler"]}</h5>
              <ul className="links">
                <li>
                  <a href="#0">{lang["Doktorlar"]}</a>
                </li>
                <li>
                  <a href="#0">{lang["Klinikler"]}</a>
                </li>
                <li>
                  <a href="#0">{lang["Uzmanlıklar"]}</a>
                </li>
                <li>
                  <a href="#0">{lang["Doktor Olarak Kayıt Ol"]}</a>
                </li>
                <li>
                  <a href="#0">{lang["Uygulamayı İndir"]}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>{lang["İletişime Geçin"]}</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="icon_mobile"></i> +90 555 555 55 55
                  </a>
                </li>
                <li>
                  <a href="mailto:info@findoctor.com">
                    <i className="icon_mail_alt"></i>{" "}
                    health_tourism@niltekyazilim.com
                  </a>
                </li>
              </ul>
              <div className="follow_us">
                <h5>{lang["Bizi Takip Edin"]}</h5>
                <ul>
                  <li>
                    <a href="#0">
                      <i className="social_facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li>
                  <a href="#0">{lang["Gizlilik ve Koşullar"]}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© 2022 Health Tourism</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
