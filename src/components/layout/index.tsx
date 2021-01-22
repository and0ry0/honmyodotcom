import Footer from './footer'
import Meta from './meta'
import packageJson from '../../../package.json'

export default function Layout({ isHome, preview, children }) {

  return (
    <>
      <Meta />
      <div id="#" className="overflow-hidden max-w-screen overflow-y-scroll min-h-screen flex flex-col">
        <main className="flex flex-col flex-grow items-center">
          {children}
        </main>
        <Footer />
        <div className="z-30 fixed top-0 right-0 p-3 text-xl font-bold text-gray-500 opacity-50">PRE-ALPHA v{packageJson.version}</div>
      </div>
    </>
  )
}
