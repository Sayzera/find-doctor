import React, { useRef, useState } from "react"
import { AiOutlineFieldTime } from "react-icons/ai"
import { ImLocation } from "react-icons/im"
import { MdOutlineSpeakerNotes } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import EditDrawerCard from "./EditDrawer"

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup"
import { Button } from "primereact/button"
import { Toast } from "primereact/toast"
import PrimeReact from "primereact/api"

export default function RandevuCard({ data, actions = true, time = true }) {
  const [visible, setVisible] = useState(false)
  const toast = useRef(null)

  const btnRef = useRef(null)

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Onaylandı",
      detail: "İşleminiz başarıyla gerçekleşti",
      life: 3000,
    })
  }

  //   const reject = () => {
  //     toast.current.show({
  //       severity: "warn",
  //       summary: "İptal",
  //       detail: "You have rejected",
  //       life: 3000,
  //     })
  //   }

  const confirm1 = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "İptal etmek istediğinize emin misiniz",
      icon: "pi pi-exclamation-triangle",
      rejectLabel: "Hayır",
      acceptLabel: "Evet",
      accept,
      //   reject,
      reject: false,
    })
  }

  const [state, setState] = React.useState({
    top: false,
  })

  // drawer komponentin dummy verileri
  const dummyData = {
    name: "Dr. Sezer Bölük",
    title: "Genel Cerrahi",
    fullData: "2014-08-18T21:11:54",
    note: "Bağ ağrısı ve burun tıkanıklığı",
  }

  const toggleDrawer =
    (anchor = "right", open) =>
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }

      console.log("work")
      setState({ ...state, [anchor]: open })
    }

  return (
    <div>
      <Toast ref={toast} />
      <ConfirmPopup />
      <EditDrawerCard
        toggleDrawer={toggleDrawer}
        state={state}
        data={dummyData}
      />{" "}
      <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">
        <div className="md:flex items-center justify-between mb-4">
          <div className="flex justify-between md:justify-start items-center md:space-x-3">
            <h5 className="text-md-ld md:text-xl font-bold leading-none text-gray-900 dark:text-white">
              {data.name}{" "}
            </h5>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {data.title}
            </span>
          </div>

          {actions && (
            <div className="flex items-center  md:justify-start mt-3 ">
              <Button
                onClick={toggleDrawer("right", true)}
                label="Düzenle"
                icon="pi pi-pencil"
                className="mr-2 p-button-sm w-full pr-5"
              ></Button>

              <Button
                onClick={confirm1}
                label="İptal"
                icon="pi pi-times"
                className="mr-2 p-button-sm w-full p-button-danger"
              ></Button>

              <ConfirmPopup
                target={
                  typeof document !== "undefined"
                    ? document.getElementById("button")
                    : ""
                }
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                icon="pi pi-exclamation-triangle"
                accept={accept}
              />
            </div>
          )}
        </div>
        <div className="flow-root">
          <div className="border-b  pb-2  md:flex items-center justify-between">
            <div className="flex items-center space-x-5 ">
              <AiOutlineFieldTime size={30} className="text-gray-700" />{" "}
              <span className="ml-2 font-medium">Tarih / Zaman : </span>
              <span className="font-medium">{data.tarih_zaman}</span>
            </div>
            {time && (
              <div className="text-start  mt-1 md:text-left md:mt-0">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  {data.kalan_zaman}
                </span>
              </div>
            )}
          </div>
          <div className="border-b  pb-2 flex items-center space-x-5 mt-2 ">
            <ImLocation className="text-gray-700" size={30} />{" "}
            <span className="ml-2 font-medium">Doktorunuzun Adresi:</span>
            <span className="font-medium">{data.address}</span>
          </div>

          <div className="border-b  pb-2 flex items-center space-x-5 mt-2 ">
            <MdOutlineSpeakerNotes size={30} className="text-gray-700" />{" "}
            <span className="ml-2 font-medium">Randevu Notunuz : </span>
            <span className="font-medium">{data.bookNowNote}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
