import dynamic from "next/dynamic"
import Head from "next/head"
import Script from "next/script"
import React from "react"
import { fileLoader } from "../../helper/utils"
import useLang from "../../hook/lang"
import Footer from "./Footer"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { setLang } from "../../redux/langSlice"
import { useRouter } from "next/router"
import Mask from "../mask"
import { selectMask } from "../../redux/generalSlice"

function Layout({ title, children, toTop = true }) {
  const lang = useLang()
  const dispatch = useDispatch()
  const router = useRouter()
  let pageLoading = false

  // Mask
  const maskIsOpen = useSelector(selectMask)

  React.useEffect(() => {
    // unmout
    if (pageLoading == false) {
      fileLoader("/assets/js/flowbite.js")
      fileLoader("/assets/js/common_scripts.js")
      fileLoader("/assets/js/functions.js")
      fileLoader("/assets/js/bootstrap-datepicker.js")

      pageLoading = true
    }
    dispatch(setLang(lang))
  }, [router])
  return (
    <>
      {/* mask açıksa göster */}
      {maskIsOpen && <Mask />}

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Find easily a doctor and book online an appointment"
        />
        <meta name="author" content="Ansonika" />

        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          href="img/apple-touch-icon-57x57-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="72x72"
          href="img/apple-touch-icon-72x72-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="114x114"
          href="img/apple-touch-icon-114x114-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="144x144"
          href="img/apple-touch-icon-144x144-precomposed.png"
        />

        <title>{title} | Project Name</title>
      </Head>
      <div className="layer"></div>
      {/* <div id="preloader">
        <div data-loader="circle-side"></div>
      </div> */}
      {/* Header */}
      <Header />
      {/*  /main content  */}
      {children}
      {/* /footer */}
      <Footer />
      {toTop && <div id="toTop"></div>}
    </>
  )
}

export default Layout
