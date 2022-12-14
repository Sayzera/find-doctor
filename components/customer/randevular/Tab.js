import { useRouter } from "next/router"

import React from "react"
import RandevuCard from "./RandevuCard"
import { Button } from "primereact/button"
import { Badge } from "primereact/badge"
import dynamic from "next/dynamic"

function Tab() {
  const router = useRouter()
  const { tab } = router.query

  const dummyData = [
    {
      id: 1,
      name: "DR. Sezer Bölük",
      title: "Genel Cerrahi",
      tarih_zaman: "13.12.2022 / 13.10",
      note: "Bağ ağrısı ve burun tıkanıklığı",
      address:
        "Teknopark Ankara İvedik OSB Mh. 2224 Cad. No:1/203 C Bl. K:8 D:814-815-816 Yenimahalle / ANKARA",
      bookNowNote: "Bağ ağrısı ve burun tıkanıklığı",
      kalan_zaman: "1 gün 2 saat kaldı",
    },
    {
      id: 2,
      name: "DR. Cebrail Ayık",
      title: "Beyin Cerrahi",
      tarih_zaman: "15.12.2022 / 13.10",
      note: "Bağ ağrısı ve burun tıkanıklığı",
      address:
        "Teknopark Ankara İvedik OSB Mh. 2224 Cad. No:1/203 C Bl. K:8 D:814-815-816 Yenimahalle / ANKARA",
      bookNowNote: "Bağ ağrısı ve burun tıkanıklığı",
      kalan_zaman: "3 gün 2 saat kaldı",
    },
  ]

  const clickTab = (tab) => {
    router.push(`/kullanici/randevular/?tab=${tab}`)
  }
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 "
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={tab == "Bekleyenler" ? "true" : "false"}
              onClick={() => {
                clickTab("Bekleyenler")
              }}
            >
              <Button
                type="button"
                label="Bekleyenler"
                className={`${
                  tab == "Bekleyenler" ? "bg-[#7274d8]" : "bg-[#3F4079]"
                }  p-button-sm`}
              >
                <Badge value="2"></Badge>
              </Button>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={tab == "Onaylananlar" ? "true" : "false"}
              onClick={() => {
                clickTab("Onaylananlar")
              }}
            >
              <Button
                type="button"
                label="Onaylananlar"
                className={`${
                  tab == "Onaylananlar" ? "bg-[#7274d8]" : "bg-[#3F4079]"
                }  p-button-sm`}
              >
                <Badge value="1"></Badge>
              </Button>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected={tab == "İptal Edilenler" ? "true" : "false"}
              onClick={() => {
                clickTab("İptal Edilenler")
              }}
            >
              <Button
                type="button"
                label="İptal Edilenler"
                className={`${
                  tab == "İptal Edilenler" ? "bg-[#7274d8]" : "bg-[#3F4079]"
                }  p-button-sm`}
              >
                <Badge value="5"></Badge>
              </Button>
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className="hidden  rounded-lg dark:bg-gray-800 overflow-x-auto "
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {dummyData.map((item) => {
            return <RandevuCard key={item.id} data={item} />
          })}
        </div>
        <div
          className="hidden rounded-lg dark:bg-gray-800 md:h-screen"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {dummyData.map((item) => {
            return (
              <RandevuCard
                key={item.id + "onayli"}
                data={item}
                actions={false}
              />
            )
          })}
        </div>
        <div
          className="hidden  bg-white rounded-lg dark:bg-gray-800 md:h-screen "
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          {dummyData.map((item) => {
            return (
              <RandevuCard
                key={item.id + "iptal"}
                data={item}
                actions={false}
                time={false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Tab), {
  ssr: false,
})
