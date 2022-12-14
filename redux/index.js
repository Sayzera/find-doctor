import { configureStore } from "@reduxjs/toolkit"
import generalSlice from "./generalSlice"
import langSlice from "./langSlice"
import bookNowSlice from "./bookNowSlice"
import customerGeneralSlice from "./customer/generalSlice"

const store = configureStore({
  reducer: {
    lang: langSlice,
    general: generalSlice,
    bookNow: bookNowSlice,
    customerGeneral: customerGeneralSlice,
  },
})

export { store }
