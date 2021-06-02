import { GetStaticProps } from 'next'
import React from 'react'

import { Block } from '../components/Block'
import { Button } from '../components/Button'
import { Flex } from '../components/Flex'
import { BigP, Heading3 } from '../components/Typography'
import { link } from '../index.css'

interface IndexProps {
  env: string
}

const Arrow = () => (
  <Block
    as="svg"
    width="large"
    height="large"
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    marginLeft="large"
  >
    <Block
      as="path"
      d="M10.6511 0.887731L16.9276 7.16423M16.9276 7.16423L10.6511 13.4407M16.9276 7.16423H-0.000468436"
      stroke={{ darkMode: 'white', lightMode: 'darkGray' }}
      stroke-width="2"
    />
  </Block>
)

function Index({ env }: IndexProps) {
  const [version, setVersion] = React.useState('')

  React.useEffect(() => {
    fetch('/api/debug')
      .then((r) => r.json())
      .then((data) => setVersion(data.version))
  }, [])

  return (
    <Flex
      flexDirection="column"
      placeItems="center"
      marginX="auto"
      width="col15"
      height="full"
    >
      {/* <LogoSonos width="5em" height="1em" fontSize="ts3" /> */}
      <Heading3 as="h2" marginBottom="y2p5">
        Beautifully Balanced
      </Heading3>
      <BigP marginBottom="y3">
        Trueplay software perfects the sound for your unique surroundings and
        content for a listening experience that's nothing short of luxurious.{' '}
      </BigP>
      <Flex
        placeItems="center"
        marginX="auto"
        paddingX="x0p5"
        width="col9"
        gap="large"
      >
        <Button as="a" className={link} href="www.sonos.com">
          Learn More
          <Arrow />
        </Button>
        <Button as="a" className={link} href="www.sonos.com">
          Explore Products
          <Arrow />
        </Button>
      </Flex>
    </Flex>
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
