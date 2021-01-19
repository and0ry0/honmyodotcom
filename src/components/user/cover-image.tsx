import { ReactElement } from 'react'
import { User } from '../../services'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

type CoverImageProps = {
  user: User,
  fixHeight: boolean
}


export default function CoverImage({ user, fixHeight }: CoverImageProps): ReactElement {
  return (
    <div className={cn(`flex min-h-40 bg-gray-200 items-center justify-center`,
      {
        "w-full h-40 overflow-hidden": fixHeight,
        "w-screen": !fixHeight
      })}>
      {user.hasCoverImage ? 
      <Image
        src={user.coverImage.imageUrl}
        alt={`${user.name}のカバー画像`}
        width={user.coverImage.width}
        height={user.coverImage.height}
      /> : 'no pic'}
    </div>
  )
}
