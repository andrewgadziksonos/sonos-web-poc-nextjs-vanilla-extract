import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React from 'react'

import { Block } from '../Block'

type PolymorphicBlock = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Block>,
  Polymorphic.OwnProps<typeof Block>
>

export const Flex: PolymorphicBlock = React.forwardRef(
  (props, forwardedRef) => (
    <Block display="flex" {...props} ref={forwardedRef} />
  )
)

export default Flex
