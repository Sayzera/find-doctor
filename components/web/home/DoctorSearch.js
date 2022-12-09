import React from "react"
import { useSelector } from "react-redux"
import { selectLang } from "../../../redux/langSlice"
import { useForm } from "react-hook-form"
import { MdOutlineWarning } from "react-icons/md"
import Router from "next/router"

export default function DoctorSearch() {
  const lang = useSelector(selectLang)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onHandleSearch = (data) => {
    Router.push(`/doktorlar?ara=${data.search}`)
  }

  return (
    <div>
      {" "}
      <div className="hero_home version_1">
        <div className="content">
          <h3>{lang["Bir Doktor Bul!"]}</h3>
          <p>
            {lang["healthTourism ile doktorunuza kolayca ulaşabilirsiniz."]}
          </p>
          <form
            method="post"
            action="list.html"
            onSubmit={handleSubmit(onHandleSearch)}
          >
            <div id="custom-search-input">
              <div className="input-group">
                <input
                  type="text"
                  className=" search-query"
                  placeholder={lang["İsim, Uzmanlık, Şehir ..."]}
                  autoComplete="off"
                  {...register("search", {
                    required: lang["Arama alanı boş bırakılamaz"],
                    minLength: {
                      value: 3,
                      message: lang["Arama alanı en az 3 karakter olmalıdır"],
                    },
                  })}
                />
                <input
                  type="submit"
                  className="btn_search"
                  value={lang["Arama Yap"]}
                />
              </div>
              {errors.search && (
                <div className="text-left text-sm text-red-500 mt-2 pl-1 font-bold flex items-center space-x-2">
                  <MdOutlineWarning /> <span> {errors.search.message}</span>
                </div>
              )}
              <ul>
                <li>
                  <input
                    type="radio"
                    id="all"
                    name="radio_search"
                    value="all"
                  />
                  <label htmlFor="all">{lang["Tümü"]}</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="doctor"
                    name="radio_search"
                    value="doctor"
                  />
                  <label htmlFor="doctor">{lang["Doktor"]}</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="clinic"
                    name="radio_search"
                    value="clinic"
                  />
                  <label htmlFor="clinic">{lang["Klinik"]}</label>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
