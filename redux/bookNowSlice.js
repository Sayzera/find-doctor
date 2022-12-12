import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  time: null,
  date: null,
  doktorName: null,
}

export const bookNowSlice = createSlice({
  name: "bookNow",
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload
    },
    setDate: (state, action) => {
      state.date = action.payload
    },
    setDoktorName: (state, action) => {
      state.doktorName = action.payload
    },
  },
})

export const { setTime, setDate, setDoktorName } = bookNowSlice.actions
export default bookNowSlice.reducer

// Selectors
export const selectTime = (state) => state.bookNow.time
export const selectDate = (state) => state.bookNow.date
export const selectDoktorName = (state) => state.bookNow.doktorName
