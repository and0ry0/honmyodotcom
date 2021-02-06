import MoreUsers from './more-users'
import UserPreview from './user/user-preview'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

export default function UserList({users}) {
  const heroUser = users[0]
  const moreUsers = users.slice(1)

  const router = useRouter()

  if (!router.isFallback && !users) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>

      <h2 className="text-4xl font-md:text-6xl mt-12 mb-6">開発メンバー</h2>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
          <>
            <div className="">
              {heroUser && (
                <UserPreview
                  user={heroUser}
                  first={true}
                />
              )}
            </div>
            {moreUsers.length > 0 && <MoreUsers users={moreUsers} />}
          </>)
      }
    </>
  )
}