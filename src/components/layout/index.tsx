import Footer from './footer'
import Meta from './meta'
import Link from 'next/link'
import cn from 'classnames'
import { CONST_SITE_NAME } from '../../libs/constants'
import Container from 'components/container'

export default function Layout({ isHome, preview, children }) {

  const header =
    <div className="flex items-center text-center flex-col py-6 ">
      <Link href="/"><a className="block my-4">
        <h1 className="text-xl uppercase font-bold tracking-widest">{CONST_SITE_NAME}</h1>
      </a>
      </Link>
    </div>

  return (
    <>
      <Meta />
      <div id="#" className="overflow-hidden max-w-screen overflow-y-scroll min-h-screen flex flex-col">
        {isHome ? `` : header}
        <main className="flex flex-col flex-grow items-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
