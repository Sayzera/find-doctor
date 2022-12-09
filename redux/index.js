import { configureStore } from "@reduxjs/toolkit"
import generalSlice from "./generalSlice"
import langSlice from "./langSlice"

const store = configureStore({
  reducer: {
    lang: langSlice,
    general: generalSlice,
  },
})

export { store }
