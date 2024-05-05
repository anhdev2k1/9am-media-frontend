import notfoundImage from '@/assets/images/404-image.png'
const Notfound = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-primary-foreground flex items-center justify-center'>
      <img src={notfoundImage} alt='' className='w-[50%]'/>
    </div>
  )
}

export default Notfound
