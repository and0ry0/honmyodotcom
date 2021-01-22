import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Burger = ({open, setOpen}) => {
  return (
    <a onClick={() => setOpen(!open)} className={cn('cursor-pointer block text-white p-6 bottom-0 w-20 h-20',{
      'bg-red-500': open,
      'bg-blue-500': !open
    })}>
      <FontAwesomeIcon icon={['fas', 'user']} />
    </a>
  )
}
