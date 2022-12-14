import { useRouter } from "next/router"
import React from "react"
import Randevular from "./tabs/Randevular"
import YaklasanRandevular from "./tabs/YaklasanRandevular"
import Yorumlar from "./tabs/Yorumlar"

export default function Tab() {
  const router = useRouter()
  const { tab } = router.query

  const clickTab = (tab) => {
    router.push(`/kullanici?tab=${tab}`)
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
              aria-selected={tab == "Yaklaşan Randevular" ? "true" : "false"}
              onClick={() => {
                clickTab("Yaklaşan Randevular")
              }}
            >
              Yaklaşan Randevular
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
              aria-selected={tab == "Randevular" ? "true" : "false"}
              onClick={() => {
                clickTab("Randevular")
              }}
            >
              Randevular
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
              aria-selected={tab == "Yorumlar" ? "true" : "false"}
              onClick={() => {
                clickTab("Yorumlar")
              }}
            >
              Yorumlar
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
          <YaklasanRandevular />
        </div>
        <div
          className="hidden rounded-lg dark:bg-gray-800 md:h-screen"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Randevular />
        </div>
        <div
          className="hidden  bg-white rounded-lg dark:bg-gray-800 md:h-screen "
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <Yorumlar />
        </div>
      </div>
    </div>
  )
}
