import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import { AiOutlineUserDelete } from "react-icons/ai"
import DatePicker from "./DatePicker"

import { toast } from "react-toastify"

export default function EditDrawerCard({ toggleDrawer, state, data }) {
  const handleBookNow = () => {
    toast.success("Randevunuz başarıyla güncellendi")
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="px-3 py-2">
        <div className="flex items-center space-x-3 mb-3 border-b pb-2">
          <AiOutlineUserDelete size={30} />
          <div className="flex flex-col">
            <span className="text-xl">{data.name}</span>
            <span className="text-sm text-gray-500">{data.title}</span>
          </div>
        </div>

        <div>
          <DatePicker label="Randevu Tarihi" date={`2022-08-18T14:30:30`} />
        </div>

        <div className="mt-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm  text-gray-600 dark:text-white"
          >
            Randevu Notunuz
          </label>

          <textarea
            id="message"
            rows="4"
            defaultValue={data.note}
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          ></textarea>

          <div className="mt-2" onClick={toggleDrawer("right", false)}>
            <button
              type="button"
              onClick={() => {
                handleBookNow()
              }}
              className="text-white bg-gradient-to-r from-[#3F4079] via-purple-600 to-[#3F4079] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
            >
              Randevuyu Güncelle
            </button>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
