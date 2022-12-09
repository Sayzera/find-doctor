import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  mask: false,
}

const maskSlice = createSlice({
  name: "mask",
  initialState,
  reducers: {
    setMask: (state, action) => {
      state.mask = action.payload
    },
  },
})

export const { setMask } = maskSlice.actions
export default maskSlice.reducer

// Selectors

export const selectMask = (state) => state.general.mask
