import Footer from './footer'
import Meta from './meta'
import Link from 'next/link'
import cn from 'classnames'
import { CONST_SITE_NAME, CONST_MESSAGE } from '../../libs/constants'
import Container from 'components/container'
import packageJson from '../../../package.json'

export default function Layout({ isHome, preview, children }) {

  return (
    <>
      <Meta />
      <div id="#" className="overflow-hidden max-w-screen overflow-y-scroll min-h-screen flex flex-col">
        <div className="block w-screen bg-red-400 text-white py-16">
          <Container>
            <div className="font-bold mt-2 text-2xl leading-loose">
              <div className="text-3xl">{CONST_MESSAGE}</div>
              <Link href="/"><a className="hover:underline text-5xl md:text-6xl uppercase tracking-widest">{CONST_SITE_NAME}</a></Link>
            </div>
          </Container >
        </div>
        <main className="flex flex-col flex-grow items-center">
          {children}
        </main>
        <Footer />
        <div className="z-30 fixed top-0 right-0 p-3 text-xl font-bold text-gray-500 opacity-50">PRE-ALPHA v{packageJson.version}</div>
      </div>
    </>
  )
}
