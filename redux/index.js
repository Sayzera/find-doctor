import { configureStore } from "@reduxjs/toolkit"
import generalSlice from "./generalSlice"
import langSlice from "./langSlice"
import bookNowSlice from "./bookNowSlice"

const store = configureStore({
  reducer: {
    lang: langSlice,
    general: generalSlice,
    bookNow: bookNowSlice,
  },
})

export { store }
