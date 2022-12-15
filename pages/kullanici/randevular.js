import React from "react"
import Layout from "../../components/customer/Layout"
import Breadcrumb from "../../components/customer/Breadcrumb"
import Tab from "../../components/customer/randevular/Tab"

export default function Randevular() {
  return (
    <Layout>
      <Breadcrumb page={"Randevular"} />
      <div className="bg-white  rounded-lg p-4 sm:p-6 xl:p-8 mt-0 md:min-h-[40rem]">
        <Tab />
      </div>
    </Layout>
  )
}
