import { Link } from 'react-router-dom'

type BannerProps = {
  title1: string
  title2: string
  title3: string
  desc: string
  setBanner: React.Dispatch<React.SetStateAction<number>>
}
const Banner = (props: BannerProps) => {
  return (
    <div data-aos='fade-right' data-aos-duration='1000' data-aos-easing='linear' className='p-2'>
      <div className='flex flex-col items-center pt-[5%] relative text-center'>
        <h1 className='text-[3rem] lg:text-[6rem] font-bold text-secondary-foreground'>{props.title1}</h1>
        <h1 className='text-[3rem] lg:text-[6rem] font-bold text-primary'>{props.title2}</h1>
        <h1 className='text-[3rem] lg:text-[6rem] font-bold text-secondary-foreground'>{props.title3}</h1>
        <div className='w-[450px] h-[450px] absolute opacity-70 rounded-[50%] bg-primary z-[-1] right-[300px] animate-moveTop'></div>
      </div>
      <div className='flex-col text-center w-full lg:flex lg:items-center lg:justify-center mt-[40px] gap-10 lg:pr-[50px]'>
        <p className='max-sm:text-[15px] w-full lg:max-w-[50%] text-lg text-secondary-foreground font-medium'>{props.desc}</p>
        <div
          className='max-sm:mt-[50px] max-sm:m-auto w-[220px] min-h-[55px] rounded-[40px] flex items-center bg-secondary pl-2 pt-2 pb-2 gap-5 cursor-pointer'
          onClick={() => props.setBanner((prev) => (prev === 2 ? prev - 1 : prev + 1))}
        >
          <div className='w-[50px] h-[50px] rounded-[50%] bg-primary flex items-center justify-center'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              color='white'
            >
              <path
                d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                fill='currentColor'
                fill-rule='evenodd'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <Link to='/services' className='text-xl font-medium text-secondary-foreground'>
            Khám phá
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
