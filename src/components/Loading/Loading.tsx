import './loading.scss'
const Loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-60 z-40 flex items-center justify-center'>
      <div className='loader'></div>
    </div>
  )
}

export default Loading
