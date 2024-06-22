import { cn } from '@/lib/utils'
import noImage from '@/assets/images/no-image.png'
import { Link } from 'react-router-dom'
export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  thumbnail,
  path
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  thumbnail?: string
  path?: string
}) => {
  return (
    <Link
      to={path || '#'}
      className={cn(
        'lg:min-h-[350px] cursor-pointer row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-secondary-foreground/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <img src={thumbnail ? thumbnail : noImage} alt='thumbnail' className='w-full bg-cover' />
      <div className='group-hover/bento:translate-x-2 transition duration-200 p-5'>
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 line-clamp-1'>{title}</div>
        <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-1'>
          {description}
        </div>
      </div>
    </Link>
  )
}
