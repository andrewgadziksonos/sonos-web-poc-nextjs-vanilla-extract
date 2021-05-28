import { GetStaticProps } from 'next'
import React from 'react'

import { Block } from '../components/Block'

interface IndexProps {
  env: string
}

function Index({ env }: IndexProps) {
  const [version, setVersion] = React.useState('')

  React.useEffect(() => {
    fetch('/api/debug')
      .then((r) => r.json())
      .then((data) => setVersion(data.version))
  }, [])

  return (
    <>
      <Block
        display="flex"
        alignItems="center"
        paddingX="large"
        paddingY="medium"
      >
        {/* <LogoSonos width="5em" height="1em" fontSize="ts3" /> */}
        <Block marginLeft="small">NextJS Template Application</Block>
      </Block>
      <Block marginX="small" paddingY="large">
        <Block display="flex" paddingX="small" marginBottom="small">
          environment: {env}
        </Block>
        <Block display="flex" paddingX="small">
          version: {version}
        </Block>
      </Block>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async (context) => {
  const env = process.env.ENV

  return {
    props: {
      env,
    },
  }
}
