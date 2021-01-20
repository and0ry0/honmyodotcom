import { CONST_CREATOR, CONST_SITE_NAME } from '../libs/constants'
import { ReactElement } from 'react'

import Layout from '../components/layout'
import Head from 'next/head'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { User, UserApi } from '../services'

import ErrorPage from 'next/error'
import Container from '../components/container'
import MoreUsers from '../components/more-users'
import UserPreview from '../components/user/user-preview'

type HomeProps = {
  preview: boolean,
  isHome: boolean,
  allUsers: User[]
}

export default function Home({
  preview = false,
  isHome = false,
  allUsers,
}: HomeProps): ReactElement {
  const heroUser = allUsers[0]
  const moreUsers = allUsers.slice(1)

  const router = useRouter()

  if (!router.isFallback && !allUsers) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout isHome={true} preview={false}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>

      <Container>
        <p className="mb-6">
          ブックログみたいなんじゃなくて、「棚」だけ好き勝手作れるサービスが作りたいのよ。。。
        </p>

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
      </Container>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = new UserApi();
  const allUsers = (await api.fetchUserEntries()) ?? []
  return {
    props: { allUsers },
  };
}