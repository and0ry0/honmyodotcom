import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { User, UserApi } from '../services'
import { createClient, EntryCollection } from 'contentful'

import { CONST_SITE_NAME } from '../libs/constants'

import Container from '../components/container'
import ErrorPage from 'next/error'
import Layout from '../components/layout'
import UserHeader from '../components/user/user-header'


type AllUsersProps = {
  userNow: User,
  preview: boolean,
  isHome: boolean,
  allUsers: User[]
}

export default function AllUsers({
  userNow,
  preview = false,
  isHome = false,
  allUsers,
}: AllUsersProps): ReactElement {
  const heroUser = userNow

  const router = useRouter()

  if (!router.isFallback && !allUsers) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout isHome={false} preview={preview}>
      <Head>
        <title>{heroUser.name} (@{heroUser.twitter}) | {CONST_SITE_NAME}</title>
        <meta name="description" content={(`${heroUser.name}さんはHonmyoを使っています`)} />
        <meta property="og:image" content={heroUser.hasProfileImage ? heroUser.coverImage.imageUrl : 'android-chrome-512x512x.png'} />
      </Head>

        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
            <div className="mb-6">
              <UserHeader isList={false} user={heroUser} />
            </div>
          )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = new UserApi();
  const allUsers = (await api.fetchUserEntries()) ?? []
  return {
    props: {
      allUsers,
      userNow: allUsers.filter(user => user.slug == params.slug)[0]
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const entries: EntryCollection<Pick<User, 'slug'>> = await client.getEntries({
    content_type: 'user',
    select: 'fields.slug',
  })
  return {
    paths: entries.items.map(({ fields }) => `/${fields.slug}`) ?? [],
    fallback: false
  }
}
