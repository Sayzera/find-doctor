import { useRouter } from "next/router"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { fileLoader } from "../../../helper/utils"
import useLang from "../../../hook/lang"
import {
  selectDate,
  selectTime,
  setDate,
  setDoktorName,
  setTime,
} from "../../../redux/bookNowSlice"
import { setMask } from "../../../redux/generalSlice"

export default function BookTab() {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const time = useSelector(selectTime)

  const lang = useLang()

  const router = useRouter()

  React.useEffect(() => {
    dispatch(setDoktorName("Dr. Sezer Bölük"))

    return () => {
      try {
        setTimeout(() => {
          $("#calendar")
            .datepicker({
              todayHighlight: true,
              daysOfWeekDisabled: [0],
              toogleActive: true,
              beforeShowDay: function (date) {
                var d = date
                var curr_date = d.getDate()
                var curr_month = d.getMonth() + 1 //Months are zero based
                var curr_year = d.getFullYear()
                var formattedDate =
                  curr_year + "/" + curr_month + "/" + curr_date

                return formattedDate
              },
              // izinli günlerini seçebilir
              //   daysOfWeekDisabled: [3, 6],

              weekStart: 1,
              format: {
                toDisplay: function (date, format, language) {
                  var d = new Date(date)
                  d.setDate(d.getDate() - 7)

                  return d.toISOString()
                },
                toValue: function (date, format, language) {
                  var d = new Date(date)
                  d.setDate(d.getDate() + 7)
                  /**
                   * türkçe
                   */
                },
              },
              datesDisabled: [
                "2017/10/20",
                "2017/11/21",
                "2017/12/21",
                "2018/01/21",
                "2018/02/21",
                "2018/03/21",
              ],
            })
            .on("changeDate", function (e) {
              // console.log(e)
              var d = new Date(e.date)

              // let localData = d.toLocaleString("tr-TR", {
              //   timeZone: "Europe/Istanbul",
              //   formatMatcher: "basic",
              // })
              const todayDate = new Date(e.date)

              const formatDate =
                todayDate.getDate() < 10
                  ? `0${todayDate.getDate()}`
                  : todayDate.getDate()
              const formatMonth =
                todayDate.getMonth() + 1 < 10
                  ? `0${todayDate.getMonth() + 1}`
                  : todayDate.getMonth() + 1
              const formattedDate = [
                todayDate.getFullYear(),
                formatMonth,
                formatDate,
              ].join("-")
              dispatch(setDate(formattedDate))
            })
        }, 300)
      } catch (err) {
        console.log(err)
      }
    }
  }, [router])

  const handleBookNow = () => {
    console.log(date, time)
    if (date == null && time == null) {
      toast.error(lang["Lütfen tarih ve saat seçiniz"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
      return
    }
    if (date == null) {
      toast.error(lang["Lütfen tarih seçiniz"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
      return
    }
    if (time == null) {
      toast.error(lang["Lütfen saat seçiniz"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
      return
    }

    dispatch(setMask(true))
  }

  console.log(date, time)

  return (
    <div
      className="tab-pane fade show active"
      id="book"
      role="tabpanel"
      aria-labelledby="book-tab"
    >
      <p className="lead add_bottom_30">
        {
          lang[
            "Doktorumuzun uygun olan saat ve tarihlerine aşağıdan bakıp randevu alabilirsiniz. Size ve Ailenize sağlıklı günler dileriz"
          ]
        }
      </p>
      <form>
        <div className="main_title_3">
          <h3>
            <strong>1</strong>
            {lang["Tarih Seçiniz"]}
          </h3>
        </div>
        <div className="form-group add_bottom_45">
          <div id="calendar"></div>
          <input type="hidden" id="my_hidden_input" />
          <ul className="legend">
            <li>
              <strong></strong>
              {lang["Uygun"]}
            </li>
            <li>
              <strong></strong>
              {lang["Uygun Değil"]}
            </li>
          </ul>
        </div>
        <div className="main_title_3">
          <h3>
            <strong>2</strong>
            {lang["Zaman Seçiniz"]}
          </h3>
        </div>
        <div className="row justify-content-center add_bottom_45">
          <div className="col-md-3 col-6 text-center">
            <ul className="time_select">
              <li>
                <input
                  type="radio"
                  id="radio1"
                  name="radio_time"
                  value="09.30am"
                  onChange={() => dispatch(setTime("09.30"))}
                />
                <label htmlFor="radio1">09.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio2"
                  name="radio_time"
                  value="10.00am"
                  onChange={() => dispatch(setTime("10.00"))}
                />
                <label htmlFor="radio2">10.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio3"
                  name="radio_time"
                  value="10.30am"
                  onChange={() => dispatch(setTime("10.30"))}
                />
                <label htmlFor="radio3">10.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio4"
                  name="radio_time"
                  value="11.00am"
                  onChange={() => dispatch(setTime("11.00"))}
                />
                <label htmlFor="radio4">11.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio5"
                  name="radio_time"
                  value="11.30am"
                  onChange={() => dispatch(setTime("11.30"))}
                />
                <label htmlFor="radio5">11.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio6"
                  name="radio_time"
                  value="12.00am"
                  onChange={() => dispatch(setTime("12.00"))}
                />
                <label htmlFor="radio6">12.00</label>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 text-center">
            <ul className="time_select">
              <li>
                <input
                  type="radio"
                  id="radio7"
                  name="radio_time"
                  value="01.30pm"
                  onChange={() => dispatch(setTime("13.30"))}
                />
                <label htmlFor="radio7">13.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio8"
                  name="radio_time"
                  value="02.00pm"
                  onChange={() => dispatch(setTime("14.00"))}
                />
                <label htmlFor="radio8">14.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio8"
                  name="radio_time"
                  value="02.00pm"
                  onChange={() => dispatch(setTime("14.30"))}
                />
                <label htmlFor="radio8">14.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio9"
                  name="radio_time"
                  value="02.30pm"
                  onChange={() => dispatch(setTime("15.00"))}
                />
                <label htmlFor="radio9">15.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio10"
                  name="radio_time"
                  value="03.00pm"
                  onChange={() => dispatch(setTime("15.30"))}
                />
                <label htmlFor="radio10">15.30</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="radio11"
                  name="radio_time"
                  value="03.30pm"
                  onChange={() => dispatch(setTime("16.00"))}
                />
                <label htmlFor="radio11">16.00</label>
              </li>
            </ul>
          </div>
        </div>
        {/* /row */}
      </form>
      <hr />
      <p className={`text-center ${!time || !date ? "hidden" : ""}`}>
        <span
          data-drawer-target="book-now-drawer"
          data-drawer-show="book-now-drawer"
          aria-controls="book-now-drawer"
          data-drawer-placement="right"
          className={`btn_1 medium `}
          data-drawer-backdrop="false"
          onClick={handleBookNow}
        >
          {lang["Randevu Al"]}
        </span>
      </p>

      {time == null || date == null ? (
        <p className="text-center">
          <span className={`btn_1 medium`} onClick={handleBookNow}>
            {lang["Randevu Al"]}
          </span>
        </p>
      ) : null}
    </div>
  )
}
