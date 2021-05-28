import {
  GlobalStyles,
  LazyProvider,
  theme,
  ThemeProvider,
} from '@sonos-inc/web-ui-core'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

export default function App({
  Component,
  pageProps,
}: {
  Component: NextPage
  pageProps: any
}) {
  return (
    <div id="preact_root">
      <LazyProvider lazy={dynamic}>
        <ThemeProvider theme={theme}>
          <GlobalStyles useDarkMode={false} />
          <Component {...pageProps} />
        </ThemeProvider>
      </LazyProvider>
    </div>
  )
}
