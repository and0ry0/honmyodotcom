
import packageJson from '../../../package.json'

import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './menu';

import { Burger, Menu } from './menu'
import Footer from './footer'
import Meta from './meta'

import { CONST_SITE_NAME, CONST_MESSAGE } from '@options/constants'

export default function Layout({ children, allUsers }) {

  const [open, setOpen] = useState<boolean>();

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Meta />
      <div id="#" className="overflow-hidden w-screen h-screen">
        <nav className="z-20 fixed top-0 left-0 flex">
          <Burger open={open} setOpen={setOpen} />
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
        {/* メニュー以外クリックで閉じる */}
        <div ref={node} className="z-10 fixed top-20 left-0">
          <Menu allUsers={allUsers} open={open} />
        </div>
        <main className="w-screen h-screen">
          {children}
        </main>
        <Footer />
        <div className="z-30 fixed top-0 right-0 p-3 text-xl font-bold text-gray-500 opacity-50">PRE-ALPHA v{packageJson.version}</div>
      </div>
    </>
  )
}

