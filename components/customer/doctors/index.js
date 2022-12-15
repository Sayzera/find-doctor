import React from "react"
import Image from "next/image"
import { CgProfile } from "react-icons/cg"
import { IoLocationOutline } from "react-icons/io5"
import { TfiComments } from "react-icons/tfi"
import { MdOutlineNoteAlt } from "react-icons/md"
import { Tooltip } from "primereact/tooltip"
import { Knob } from "primereact/knob"

export default function DoctorCard({ data }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  ">
      <Image src={data.image} alt="Doctor 1" width={"100%"} height={"auto"} />

      <div className="flex items-center justify-between px-2 py-2 h-14">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white ">
          {data.name}
        </h1>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {data.department}
        </span>
      </div>
      <div className="px-2 w-full flex h-32 overflow-hidden text-clip mb-2">
        {data.description}
      </div>

      <div className="px-2 py-3 flex items-center space-x-3 border-t justify-between">
        <Tooltip
          target=".doctor-profile"
          content={`Doktorunuz hakkında daha fazla bilgi alabilirsiniz`}
          position="top"
        />

        <Tooltip
          target=".doctor-location"
          content={`Doktorunuzun adresini görebilirsiniz`}
          position="top"
        />

        <Tooltip
          target=".doctor-comment"
          content={`Doktorunuz hakkında yorumda bulunabilirsiniz`}
          position="top"
        />

        <Tooltip
          target=".doctor-note"
          content={`Doktorunuz hakkında not alabilirsiniz.`}
          position="top"
        />

        <CgProfile
          size={35}
          className="text-[#3F4079] hover:text-[#6466ac] cursor-pointer doctor-profile"
        />
        <IoLocationOutline
          size={35}
          className="text-[#3F4079] hover:text-[#6466ac] cursor-pointer doctor-location"
        />
        <TfiComments
          size={35}
          className="text-[#3F4079] hover:text-[#6466ac] cursor-pointer doctor-comment"
        />
        <MdOutlineNoteAlt
          size={35}
          className="text-[#3F4079] hover:text-[#6466ac] cursor-pointer doctor-note"
        />
      </div>
    </div>
  )
}
