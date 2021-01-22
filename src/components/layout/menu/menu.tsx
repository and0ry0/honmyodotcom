import cn from 'classnames'
import UserList from '@components/user-list'

export const Menu = ({open, allUsers}) => {
  return (
    <div className={cn('transition duration-500 shadow-xl p-4 bg-white transform',{
      'translate-x-0': open,
      '-translate-x-full': !open
    })}>
      <UserList allUsers={allUsers} />
    </div>
  )
}