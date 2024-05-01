import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
}

export default App
