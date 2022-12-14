import * as React from "react"
import dayjs from "dayjs"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import "dayjs/locale/tr"
import "dayjs/locale/en"
import { MobileDateTimePicker } from "@mui/x-date-pickers"
import { useDispatch, useSelector } from "react-redux"
import {
  selectEditDateTime,
  setEditDateTime,
} from "../../../redux/customer/generalSlice"

export default function DatePicker({ label, date }) {
  const dispatch = useDispatch()
  const dateTime = useSelector(selectEditDateTime)
  const defaultDate = dayjs(date).format("YYYY-MM-DDTHH:mm:ss")

  const handleChange = (newValue) => {
    dispatch(setEditDateTime(dayjs(newValue).format("YYYY-MM-DDTHH:mm:ss")))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
      <Stack spacing={3}>
        <MobileDateTimePicker
          label={label}
          inputFormat="MM/DD/YYYY HH:mm"
          value={dateTime ? dateTime : defaultDate}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          ampm={false}
          minTime={dayjs().set("hour", 8)}
          maxTime={dayjs().set("hour", 17)}
        />
      </Stack>
    </LocalizationProvider>
  )
}
