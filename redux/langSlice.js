import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  lang: {},
}

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const { setLang } = langSlice.actions
export default langSlice.reducer

// Selectors
export const selectLang = (state) => state.lang.lang
