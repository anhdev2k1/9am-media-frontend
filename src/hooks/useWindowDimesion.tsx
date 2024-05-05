import { useEffect, useState } from 'react'

const useWindowDimension = () => {
  const [dimesion, setDimesion] = useState(window.scrollY)

  const handleScroll = () => {
    setDimesion(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])
  return {
    dimesion
  }
}

export default useWindowDimension
