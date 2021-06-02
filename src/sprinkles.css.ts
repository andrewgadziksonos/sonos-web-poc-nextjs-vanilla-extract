import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'

const space = {
  none: 0,
  auto: 'auto',
  small: '4px',
  medium: '8px',
  large: '16px',
  huge: '28px',
  // etc.
}

const horizontalSpace = Object.fromEntries(
  [...Array(27).keys()].flatMap((n) => {
    const num = n + 1

    return [
      [`col${num}`, `${(100 * num) / 27}vw`],
      num < 27 ? [`col${num}p5`, `${(100 * (num + 0.5)) / 27}vw`] : [],
    ].filter((x) => x.length)
  })
)

const verticalSpace = Object.fromEntries(
  Object.keys(horizontalSpace).flatMap((hs) => {
    const pattern = /^col(\d{1,2})p?5?$/
    const [, n] = hs.match(pattern) ?? []
    const num = parseInt(n)

    return [
      [`y${num}`, `${8 * num}px`],
      num < 27 ? [`y${num}p5`, `${8 * (num + 0.5)}px`] : [],
    ].filter((x) => x.length)
  })
)

const fontStyles = createAtomicStyles({
  properties: {
    fontFamily: {
      body: 'aktiv-grotesk,Helvetica,Arial,sans-serif',
    },
  },
})

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
    paddingTop: { ...space, ...verticalSpace },
    paddingBottom: { ...space, ...verticalSpace },
    paddingLeft: {
      ...space,
      ...horizontalSpace,
      x0p5: `${(100 * 0.5) / 27}vw`,
    },
    paddingRight: {
      ...space,
      ...horizontalSpace,
      x0p5: `${(100 * 0.5) / 27}vw`,
    },
    marginTop: { ...space, ...verticalSpace },
    marginBottom: { ...space, ...verticalSpace },
    marginLeft: { ...space, ...horizontalSpace, x0p5: `${(100 * 0.5) / 27}vw` },
    marginRight: {
      ...space,
      ...horizontalSpace,
      x0p5: `${(100 * 0.5) / 27}vw`,
    },
    gap: {
      ...space,
      ...horizontalSpace,
      x0p5: `${(100 * 0.5) / 27}vw`,
    },
    width: { ...space, ...horizontalSpace },
    height: { ...space, ...verticalSpace, full: '100vh' },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      h1: 500,
      h2: 500,
      h3: 500,
      h4: 500,
      h5: 400,
      h6: 500,
      subheadline: 500,
      subheadlineSmall: 700,
      paragraphBig: 400,
      paragraphMedium: 400,
      paragraphSmall: 400,
      caption: 500,
    },
    fontSize: {
      h1: 96,
      h2: 72,
      h3: 64,
      h4: 48,
      h5: 42,
      h6: 32,
      subheadline: 18,
      subheadlineSmall: 16,
      paragraphBig: 21,
      paragraphMedium: 18,
      paragraphSmall: 16,
      caption: 14,
    },
    lineHeight: {
      h1: 1,
      h2: 1,
      h3: 1,
      h4: 1,
      h5: 1,
      h6: 1,
      subheadline: 18,
      subheadlineSmall: 16,
      paragraphBig: 1.33,
      paragraphMedium: 1.4,
      paragraphSmall: 1.4,
      caption: 1,
    },
    letterSpacing: {
      h1: 'normal',
      h2: 'normal',
      h3: 'normal',
      h4: 'normal',
      h5: 'normal',
      h6: 'normal',
      subheadline: 'normal',
      subheadlineSmall: 'normal',
      paragraphBig: '-0.01em',
      paragraphMedium: '-0.01em',
      paragraphSmall: '-0.01em',
      caption: 0.2,
    },
    borderWidth: {
      button: 1,
    },
    borderStyle: {
      button: 'solid',
    },
    borderRadius: {
      button: 50,
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    text: ['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'],
    border: ['borderStyle', 'borderWidth', 'borderRadius'],
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
    borderColor: colors,
    stroke: colors,
    // etc.
  },
})

export const atoms = createAtomsFn(fontStyles, responsiveStyles, colorStyles)

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0]
