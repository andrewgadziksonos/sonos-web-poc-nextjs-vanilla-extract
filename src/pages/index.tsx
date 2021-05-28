import { Block, Flex, LogoSonos } from '@sonos-inc/web-ui-core'
import { GetStaticProps } from 'next'
import React from 'react'

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
      <Flex alignItems="center" px="x2" py="huge">
        <LogoSonos width="5em" height="1em" fontSize="ts3" />
        <Block ml="small">NextJS Template Application</Block>
      </Flex>
      <Block mx="x2" py="huge" colors="brand2">
        <Flex px="x2" mb="small">
          environment: {env}
        </Flex>
        <Flex px="x2">version: {version}</Flex>
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
