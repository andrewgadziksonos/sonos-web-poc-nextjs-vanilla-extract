import { style } from '@vanilla-extract/css'

export const link = style({
  textDecoration: 'none',
  ':hover': {
    opacity: 0.7,
  },
  '@media': {
    'screen and (prefers-reduced-motion: no-preference)': {
      transition: 'opacity 250ms ease',
    },
  },
})
