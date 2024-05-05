import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { ThemeProvider } from './contexts/theme-provider'
function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
    </ThemeProvider>
  )
}

export default App
