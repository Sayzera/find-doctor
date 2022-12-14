import React from "react"
import TimeItem from "./TimeLine/TimeItem"

export default function ZamanCizelgesi() {
  let dummyData = [
    {
      id: 1,
      doctorName: "Dr. Sezer Bölük",
      doctorBranch: "Genel Cerrahi",
      date: "13.12.2022",
      time: "13:00",
      createdAt: "1 saat önce oluşturuldu",
      last: true,
      note: "Baş ağrısı ve kafamda bulanık görüntü var.",
    },
    {
      id: 2,
      doctorName: "Dr. Cebrail Ayık",
      doctorBranch: "Beyin Cerrahi",
      date: "13.12.2022",
      time: "13:30",
      createdAt: "2 saat önce oluşturuldu",
      last: false,
      note: "Karın ağrısı ve baş ağrısı var.",
    },
    {
      id: 3,
      doctorName: "Dr. Kadir Yıldırım",
      doctorBranch: "Estetik Cerrahi",
      date: "14.12.2022",
      time: "13:00",
      createdAt: "3 saat önce oluşturuldu",
      last: false,
      note: "Burun estetiği için randevu aldım.",
    },
  ]
  return (
    <div>
      <div className=" border-b py-3 px-3">
        <h1 className="text-xl">Randevu Geçmişim</h1>
        <p className="text-sm text-gray-600">
          Son 4 randevunuz listelenmektedir
        </p>
      </div>
      <div className="">
        <ol className="mt-2 ">
          {dummyData.map((item) => (
            <TimeItem data={item} key={item.id} />
          ))}
        </ol>
      </div>
    </div>
  )
}
