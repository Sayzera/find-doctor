import Image from "next/image"
import Link from "next/link"
import React from "react"
import useLang from "../../../hook/lang"

import appleImg from "../../../public/assets/img/apple_app.png"
import googleImg from "../../../public/assets/img/google_play_app.png"
import appSvg from "../../../public/assets/img/app_img.svg"

export default function Promotion() {
  const lang = useLang()
  return (
    <div>
      {" "}
      <div id="app_section">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-5">
              <p>
                <Image
                  className="mt-2"
                  src={appSvg}
                  alt="Apple App"
                  width="500"
                  height="433"
                  data-retina="true"
                />
              </p>
            </div>
            <div className="col-md-6">
              <small>{lang["Mobil Uygulama"]}</small>
              <h3>
                {lang["Doktorunuzla görüşmek için mobil uygulamamızı indirin"]}
              </h3>

              <div className="app_buttons wow mt-3" data-wow-offset="100">
                <Link href={"#"}>
                  <Image
                    className="mt-2"
                    src={appleImg}
                    alt="Apple App"
                    width="150"
                    height="50"
                    data-retina="true"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    className="mt-2"
                    src={googleImg}
                    alt="Apple App"
                    width="150"
                    height="50"
                    data-retina="true"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/*  /row  */}
        </div>
        {/*  /container  */}
      </div>
    </div>
  )
}
