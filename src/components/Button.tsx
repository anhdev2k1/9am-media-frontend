import { Link } from 'react-router-dom'
import { Button, ButtonProps } from './ui/button'
interface CustomButtonProps extends ButtonProps {
  path: string
  title: string
}
const CustomButton = (props: CustomButtonProps) => {
  return (
    <Link to={props.path}>
      <Button className='animate-scaleAnimate button__box' {...props}>
        {props.title}
      </Button>
    </Link>
  )
}

export default CustomButton
