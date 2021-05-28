import {
  CloudFrontInvalidator,
  SonosAccount,
  SonosEnv,
  SonosWebBaseStack,
} from '@sonos-inc/cdk-core'
import { NextJSFargateService } from '@sonos-inc/cdk-nextjs'
import { CfnOutput, Construct, Stack, StackProps } from 'monocdk'
import { Certificate } from 'monocdk/aws-certificatemanager'
import {
  AllowedMethods,
  Distribution,
  OriginProtocolPolicy,
  ViewerProtocolPolicy,
} from 'monocdk/aws-cloudfront'
import { HttpOrigin } from 'monocdk/aws-cloudfront-origins'
import { Vpc } from 'monocdk/aws-ec2'
import { Cluster, ContainerImage } from 'monocdk/aws-ecs'
import { ApplicationLoadBalancedFargateService } from 'monocdk/aws-ecs-patterns'
import { CfnWebACL, CfnWebACLAssociation } from 'monocdk/aws-wafv2'
import { Secret } from 'monocdk/lib/aws-secretsmanager'

export class NextJsTemplateApplicationStack extends SonosWebBaseStack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const sonosEnvironment = this.sonosEnv
    const version = this.node.tryGetContext('version')
    const appName = this.node.tryGetContext('appName')
    const ghcrSecretArn = this.node.tryGetContext('ghcrSecretArn')
    const certArn = this.node.tryGetContext('certArn')

    new NextJSFargateService(this, 'NextJSCluster', {
      appName,
      certificateArn: certArn,
      desiredCount: sonosEnvironment === SonosEnv.PRODUCTION ? 2 : 1,
      ghcrSecretArn,
      listenerPort: 443,
      version,
    })
  }
}
