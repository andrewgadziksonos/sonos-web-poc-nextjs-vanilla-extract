import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React from 'react'

import { Block } from '../Block'

type PolymorphicBlock = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Block>,
  Polymorphic.OwnProps<typeof Block>
>

export const BigP: PolymorphicBlock = React.forwardRef(
  (props, forwardedRef) => (
    <Block
      as="p"
      text="paragraphBig"
      margin="none"
      padding="none"
      {...props}
      ref={forwardedRef}
    />
  )
)

export const Heading3: PolymorphicBlock = React.forwardRef(
  (props, forwardedRef) => (
    <Block as="h3" text="h3" margin="none" padding="none" {...props} />
  )
)
