import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  activeMenu: "home",
  editDateTime: null,
}

const customerGeneralSlice = createSlice({
  name: "customerGeneral",
  initialState,
  reducers: {
    setActiveMenu(state, action) {
      state.activeMenu = action.payload
    },
    setEditDateTime(state, action) {
      state.editDateTime = action.payload
    },
  },
})

export const { setActiveMenu, setEditDateTime } = customerGeneralSlice.actions
export default customerGeneralSlice.reducer

// Selectors

export const selectActiveMenu = (state) => state.customerGeneral.activeMenu
export const selectEditDateTime = (state) => state.customerGeneral.editDateTime
