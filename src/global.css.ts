import { atoms } from './sprinkles.css'

export const heightFull = atoms({
  height: 'full',
})

export const body = atoms({
  fontFamily: 'body',

  background: {
    lightMode: 'white',
    darkMode: 'black',
  },
  color: {
    lightMode: 'black',
    darkMode: 'white',
  },
})
