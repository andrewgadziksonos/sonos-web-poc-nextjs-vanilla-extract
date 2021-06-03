import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body, #__next, #preact_root', {
  height: '100%',
})

globalStyle('*', {
  padding: '0',
  margin: '0',
})
