import "primereact/resources/themes/lara-light-indigo/theme.css" //theme
import "primereact/resources/primereact.min.css" //core css
import "primeicons/primeicons.css"

import { Provider } from "react-redux"
import { store } from "../redux"
import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import Toasts from "../components/Toasts/Toasts"

function MyApp({ Component, pageProps }) {
  // onload add script file head

  return (
    <>
      <Provider store={store}>
        <Toasts />
        {/* Same as */}
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
