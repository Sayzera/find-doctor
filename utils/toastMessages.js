import { toast } from "react-toastify"

export const toastMessage = (
  toastType,
  toastMessage,
  position = "top-center"
) => {
  toast[toastType](toastMessage, {
    position: position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
}
