import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/_global.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts/theme-provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import './styles/_global.scss'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </QueryClientProvider>
)
