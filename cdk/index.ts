#!/usr/bin/env node
import 'source-map-support/register'

import { SonosAccount, SonosEnvironment } from '@sonos-inc/cdk-core'
import { App } from 'monocdk'

import { NextJsTemplateApplicationStack } from './stacks/application-stack'

const app = new App()

new NextJsTemplateApplicationStack(
  app,
  'sonos-web-template-nextjs-application-stack-sandbox',
  {
    sonosAccount: SonosAccount.SANDBOX,
    sonosEnvironment: SonosEnvironment.SANDBOX,
  }
)
