import DateComponent from './date'
import CoverImage from './cover-image'
import { ReactElement } from 'react'
import { User } from '../../services'
import Link from 'next/link'
import cn from 'classnames'

type UserHeaderProps = {
  isList: boolean,
  user: User
}


export default function UserHeader({ isList, user }: UserHeaderProps): ReactElement {
  return (
    <div className="">
      <div className="mb-4">
        <CoverImage fixHeight={isList} user={user} />
      </div>
      <div className="flex flex-col text-lg text-left px-4">
        <div className={cn(`flex justify-center items-center w-40 h-40 z-10 mr-6 bg-white rounded-full p-2`,{
          "-mt-10": isList,
          "-mt-20": !isList
        })}>
          {user.hasProfileImage ? 
          <img
            src={user.profileImage.imageUrl}
            className="flex-none w-36 h-36 rounded-full"
            alt={user.name}
          /> : 'No pic'
        }
        </div>
        <div className="text-xl leading-loose">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <Link href={(`https://twitter.com/${user.twitter}`)}><a className="block underline">@{user.twitter}</a></Link>
          <div>🎉 <DateComponent dateString={user.birthDate} /></div>
        </div>
      </div>
    </div>
  )
}
