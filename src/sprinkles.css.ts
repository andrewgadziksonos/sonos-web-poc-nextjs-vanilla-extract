import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  // etc.
}

const horizontalSpace = Object.fromEntries(
  [...Array(27).keys()].flatMap((n) => [
    [`x${n}`, `${(100 * n) / 27}vw`],
    [`x${n}p5`, `${(100 * (n + 0.5)) / 27}vw`],
  ])
)

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colors = {
  white: '#ffffff',
  black: '#000000',
  darkGray: '#333333',
  gray: '#737373',
  lightGray: '#E0E0E0',
  lighterGray: '#F5F5F5',
  lightRed: '#DE8579',
  gold: '#C59C6E',
}

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    // etc.
  },
})

export const atoms = createAtomsFn(responsiveStyles, colorStyles)

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0]
