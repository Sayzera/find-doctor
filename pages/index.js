import dynamic from "next/dynamic"
import Head from "next/head"
import Script from "next/script"
import DoctorSearch from "../components/web/home/DoctorSearch"
import FindDoctorAndClinick from "../components/web/home/FindDoctorAndClinick"
import MostPopulerDoctors from "../components/web/home/MostPopulerDoctors"
import Promotion from "../components/web/home/Promotion"
import Properties from "../components/web/home/Properties"
import Layout from "../components/web/Layout"
function Home() {
  return (
    <Layout>
      <Head>
        <script src="/assets/js/functions.js"></script>
      </Head>
      <main>
        {/* <Link href="/en">English</Link>
        <Link href="/tr">Türkçe</Link>
        <Link href="/ar">عربى</Link>

         */}

        {/* 
          Anasayfa doktor arama kısmı
        */}
        <DoctorSearch />
        {/* 
          Anasayfa özellikler kısmı
        */}
        <Properties />

        {/* 
         En çok görüntülenen(en çok aranan, iletişime geçilen vs.) doktorlar veya klinikler
        */}
        <MostPopulerDoctors />

        {/* 
          Doctor veya klinik arama kısmı
        */}
        <FindDoctorAndClinick />

        {/* 
          Uygulamanın tanıtım kısmı 
        */}
        <Promotion />

        {/*  /app_section  */}
      </main>
    </Layout>
  )
}

export default Home
