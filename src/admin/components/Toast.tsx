import { ToastPosition, toast } from 'react-toastify'

type ToastProps = {
  message: string
  position: ToastPosition
}
const Toast = ({ message, position }: ToastProps) => {
  return toast(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
}

export default Toast
