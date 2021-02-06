
import packageJson from '../../../package.json'

import React from 'react';
import Footer from './footer'
import Meta from './meta'

import { CONST_SITE_NAME, CONST_MESSAGE } from '@options/constants'

export default function Layout({ children, allUsers }) {

  return (
    <>
      <Meta />
      <div id="#" className="overflow-hidden flex flex-col py-10">
        <nav className="z-20 fixed top-0 left-0 flex">
          <div className="p-3 text-red-400">
            <div className="font-bold text-lg leading-loose">
              <div className="text-xl">
                {CONST_MESSAGE}
                <br />
                {CONST_SITE_NAME}
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <div className="fixed top-0 right-0 z-30 p-3 text-xl font-bold text-gray-500 opacity-50">PRE-ALPHA v{packageJson.version}</div>
      </div>
    </>
  )
}

