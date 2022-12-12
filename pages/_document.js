import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/menu.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/vendors.css" />
        <link
          rel="stylesheet"
          href="/assets/css/icon_fonts/css/all_icons_min.css"
        />

        <link rel="stylesheet" href="/assets/css/flowbite.css" />
        <link rel="stylesheet" href="/assets/css/date_picker.css" />
      </Head>
      <body>
        <Main />

        <NextScript />

        <Script
          src="/assets/js/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("jquery loaded")
          }}
        />

        <Script
          src="/assets/js/common_scripts.js"
          strategy="beforeInteractive"
        />

        {/* 
      
        <Script
          src="assets/js/bootstrap-datepicker.js"
          strategy="beforeInteractive"
        />

        <Script src="/assets/js/flowbite.js" strategy="beforeInteractive" /> */}
      </body>
    </Html>
  )
}
