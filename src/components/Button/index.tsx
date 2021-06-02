import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React from 'react'

import { Flex } from '../Flex'

type PolymorphicFlex = Polymorphic.ForwardRefComponent<
  'button',
  Polymorphic.OwnProps<typeof Flex>
>

export const Button: PolymorphicFlex = React.forwardRef(
  (props, forwardedRef) => (
    <Flex
      as="button"
      placeItems="center"
      paddingY="large"
      paddingX="huge"
      border="button"
      borderColor={{ darkMode: 'white', lightMode: 'black' }}
      color={{ darkMode: 'white', lightMode: 'black' }}
      {...props}
      ref={forwardedRef}
    />
  )
)

export default Button
