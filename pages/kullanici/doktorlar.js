import React from "react"
import Layout from "../../components/customer/Layout"
import Breadcrumb from "../../components/customer/Breadcrumb"
import DoctorCard from "../../components/customer/doctors/index"

import doctor_1 from "../../public/assets/customers/img/doctor-1.jpg"
import doctor_2 from "../../public/assets/customers/img/doctor-2.webp"
import doctor_3 from "../../public/assets/customers/img/doctor-3.webp"

export default function Randevular() {
  let dummyData = [
    {
      id: 1,
      name: "DR. Sezer Bölük",
      department: "Genel Cerrahi",
      image: doctor_1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur aliquam voluptates nulla veritatis suscipit enim, id debitis nihil, mollitia molestiae maxime commodi! Architecto doloribus aspernatur voluptatem voluptatibus, quo repellendus?",
      commentCount: 5,
    },
    {
      id: 2,
      name: "DR. Cebrail Ayık",
      department: "Kardiyoloji",
      image: doctor_2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur aliquam voluptates nulla veritatis suscipit enim, id debitis nihil, mollitia molestiae maxime commodi! Architecto doloribus aspernatur voluptatem voluptatibus, quo repellendus?",
      commentCount: 5,
    },
    {
      id: 3,
      name: "DR. Kadir Yıldırım",
      department: "KBB",
      image: doctor_3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur aliquam voluptates nulla veritatis suscipit enim, id debitis nihil, mollitia molestiae maxime commodi! Architecto doloribus aspernatur voluptatem voluptatibus, quo repellendus?",
      commentCount: 5,
    },
  ]
  return (
    <Layout>
      <Breadcrumb page={"Doktorlarım"} />
      <div
        className="bg-white  rounded-lg p-4 sm:p-6 xl:p-8 mt-0 md:min-h-[40rem] 
      grid md:grid-cols-3 2xl:grid-cols-4 gap-5 
      grid-rows-2
      "
      >
        {dummyData.map((data) => {
          return <DoctorCard data={data} key={data.id} />
        })}
      </div>
    </Layout>
  )
}
