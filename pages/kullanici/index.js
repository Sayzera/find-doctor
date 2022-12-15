import React from "react"
import Layout from "../../components/customer/Layout"
import Cart from "../../components/customer/Home/Cart"
import { SiGotomeeting } from "react-icons/si"
import { BiCommentDetail } from "react-icons/bi"
import { GoBook } from "react-icons/go"
import Tab from "../../components/customer/Home/Tab"
import ZamanCizelgesi from "../../components/customer/Home/ZamanCizelgesi"
import { useRouter } from "next/router"
import Breadcrumb from "../../components/customer/Breadcrumb"
export default function Home() {
  return (
    <Layout>
      <Breadcrumb page={"Yaklaşan Randevular"} />
      <div className="bg-white  rounded-lg p-4 sm:p-6 xl:p-8 mt-0 md:min-h-[40rem]">
        <div className="grid md:grid-cols-2 gap-10  ">
          <div className="">
            <Tab />
          </div>

          <div className="bg-white  rounded-lg  relative border-l border-gray-200 dark:border-gray-700 pb-3 ">
            <ZamanCizelgesi />
          </div>
        </div>
      </div>
    </Layout>
  )
}
