import '../global.css'

import { NextPage } from 'next'
import React from 'react'

import { Block } from '../components/Block'

export default function App({
  Component,
  pageProps,
}: {
  Component: NextPage
  pageProps: any
}) {
  return (
    <main id="preact_root">
      <Component {...pageProps} />
    </main>
  )
}
