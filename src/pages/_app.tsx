import { NextPage } from 'next'
import React from 'react'

import { Block } from '../components/Block'
import { heightFull } from '../global.css'

export default function App({
  Component,
  pageProps,
}: {
  Component: NextPage
  pageProps: any
}) {
  return (
    <main id="preact_root" className={heightFull}>
      <Component {...pageProps} />
    </main>
  )
}
