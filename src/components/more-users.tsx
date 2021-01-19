import UserPreview from './user/user-preview'
import { ReactElement } from 'react'
import { User } from '../services'

type MoreUsersProps = {
  users: User[]
}

export default function MoreUsers({ users, }
  : MoreUsersProps):ReactElement {
  return (
    <section className="mt-20 ">
      <h2 className="mb-2 text-4xl md:text-4xl">
      Other users
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-14 mb-20">
        {users.map((user) => (
          <UserPreview
            key={user.slug}
            user={user}
            first={false}
          />
        ))}
      </div>
    </section>
  )
}
