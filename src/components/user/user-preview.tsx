import { ReactElement } from 'react'
import { User } from '../../services'
import UserHeader from '../../components/user/user-header'
import Link from 'next/link'

type UserPreviewProps = {
  user: User,
  first: boolean
}

export default function UserPreview({ user, first }: UserPreviewProps): ReactElement {
  return (
    <div id={user.slug} className="rounded-xl shadow-xl my-12 pb-6 overflow-hidden">
      <UserHeader isList={true} user={user} />
    </div>
  )
}
