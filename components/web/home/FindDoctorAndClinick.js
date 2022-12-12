import Link from "next/link"
import React from "react"
import useLang from "../../../hook/lang"
import Popover from "../../popover/Popover"

export default function FindDoctorAndClinick() {
  const lang = useLang()
  return (
    <div>
      <div className="container margin_120_95">
        <div className="main_title">
          <h2>{lang["Şehir veya Kategoriye Göre Doktorunu Bul"]}</h2>
          <p>
            {
              lang[
                "Aşağıdaki seçeneklerden tıkladığınız Şehre göre veya Kategoriye göre doktorları listeleyebilirsiniz."
              ]
            }
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="list_home">
              <div className="list_title">
                <i className="icon_pin_alt"></i>
                <h3>{lang["Şehre göre arama"]}</h3>
              </div>
              <ul>
                <li data-popover-target="popover-istanbul">
                  <Link href="/doktorlar">
                    <Popover
                      title={"İSTANBUL"}
                      content={
                        "İSTANBUL da " +
                        160 +
                        " " +
                        lang["doktor bulunmaktadır."]
                      }
                      id="popover-istanbul"
                    />
                    <strong>160</strong>
                    İSTANBUL
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar" data-popover-target="popover-ANKARA">
                    <Popover
                      title={"ANKARA"}
                      content={
                        "ANKARA da " + 150 + " " + lang["doktor bulunmaktadır."]
                      }
                      id="popover-ANKARA"
                    />
                    <strong>150</strong>ANKARA
                  </Link>
                </li>
                <li data-popover-target="popover-BURSA">
                  <Popover
                    title={"BURSA"}
                    content={
                      "BURSA da " + 140 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-BURSA"
                  />
                  <Link href="/doktorlar">
                    <strong>140</strong>BURSA
                  </Link>
                </li>
                <li data-popover-target="popover-İZMİR">
                  <Popover
                    title={"İZMİR"}
                    content={
                      "İZMİR da " + 130 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-İZMİR"
                  />
                  <Link href="/doktorlar">
                    <strong>130</strong>İZMİR
                  </Link>
                </li>
                <li data-popover-target="popover-ADANA">
                  <Popover
                    title={"ADANA"}
                    content={
                      "ADANA da " + 120 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-ADANA"
                  />
                  <Link href="/doktorlar">
                    <strong>120</strong>ADANA
                  </Link>
                </li>
                <li data-popover-target="popover-ADIYAMAN">
                  <Popover
                    title={"ADIYAMAN"}
                    content={
                      "ADIYAMAN da " + 110 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-ADIYAMAN"
                  />
                  <Link href="/doktorlar">
                    <strong>110</strong>ADIYAMAN
                  </Link>
                </li>
                <li data-popover-target="popover-AFYONKARAHİSAR">
                  <Popover
                    title={"AFYONKARAHİSAR"}
                    content={
                      "AFYONKARAHİSAR da " +
                      90 +
                      " " +
                      lang["doktor bulunmaktadır."]
                    }
                    id="popover-AFYONKARAHİSAR"
                  />
                  <Link href="/doktorlar">
                    <strong>90</strong>AFYONKARAHİSAR
                  </Link>
                </li>
                <li data-popover-target="popover-AĞRI">
                  <Popover
                    title={"AĞRI"}
                    content={
                      "AĞRI da " + 85 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-AĞRI"
                  />
                  <Link href="/doktorlar">
                    <strong>85</strong>AĞRI
                  </Link>
                </li>
                <li data-popover-target="popover-AKSARAY">
                  <Popover
                    title={"AKSARAY"}
                    content={
                      "AKSARAY da " + 120 + " " + lang["doktor bulunmaktadır."]
                    }
                    id="popover-AKSARAY"
                  />
                  <Link href="/doktorlar">
                    <strong>70</strong>AKSARAY
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">{lang["Daha Fazla..."]}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="list_home">
              <div className="list_title">
                <i className="icon_archive_alt"></i>
                <h3>{lang["Kategoriye göre arama"]}</h3>
              </div>
              <ul>
                <li>
                  <Link href="/doktorlar">
                    <strong>128</strong>
                    {lang["Beyin ve Sinir Cerrahisi"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>86</strong>
                    {lang["Çocuk Diş Hekimliği"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>74</strong>
                    {lang["Çocuk Sağlığı ve Hastalıkları"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>72</strong>
                    {lang["Deri ve Zührevi Hastalıkları (Cildiye)"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>56</strong>
                    {lang["Diş Hekimliği (Genel Diş)"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>55</strong>
                    {lang["Endodonti"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>52</strong>
                    {lang["Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>50</strong>
                    {lang["Fiziksel Tıp ve Rehabilitasyon"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">
                    <strong>45</strong>
                    {lang["Genel Cerrahi"]}
                  </Link>
                </li>
                <li>
                  <Link href="/doktorlar">{lang["Daha Fazla..."]}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  /row  */}
      </div>
    </div>
  )
}
