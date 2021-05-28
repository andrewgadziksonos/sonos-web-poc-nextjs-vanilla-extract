# sonos-web-template-nextjs-typescript

Template for building a NextJS application using TypeScript

Template project for [Next.js](https://nextjs.org/docs/getting-started) applications/services written in [TypeScript](https://typescriptlang.org/).

This is **Template** repository. Use the [GitHub template](https://help.github.com/en/articles/creating-a-template-repository) when creating a new repository.

## Template Release Notes

See the [Changelog](.//CHANGELOG.md)

# Package Name (package-name)

![TypeScript Version](https://img.shields.io/badge/typescript-4.0-blue.svg?style=for-the-badge)
![](https://img.shields.io/badge/node-12.19.0-green.svg?style=for-the-badge)
[![GitHub license](https://img.shields.io/badge/license-UNLICENSED-blue.svg?style=for-the-badge)](.//LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/gitProject/graphs/commit-activity)
![Release](https://img.shields.io/github/release-pre/gitProject.svg?style=for-the-badge)

Short package description goes here

## Release Notes

| Version | Description     |
| :-----: | --------------- |
|  1.0.0  | Initial release |

# Installation

To install `package-name` for use within your project use [yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

```bash
# Install locally in home directory
$ git clone https://github.com/Sonos-Inc/gitProject ~/package-name

# Install dependencies
$ cd ~/package-name
$ yarn install

# build the application
$ yarn build:ssr

# OPTIONAL: export static html files
$ yarn build:ssg
```

# Running Locally

To start the NextJS development server invoke the following command,

```bash
$ yarn dev
```

## Debugging

Use a browser's devtools to help debug React code. For example, in Chrome you can use the Source tab in their DevTools to set breakpoints, etc.

# Deployment

Our deployment script utilize Terraform as the infra-as-code solution. As a prerequisite, you must download and install [Terraform](https://www.terraform.io/downloads.html)

Next, you'll need to configure your [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

Once you have Terraform installed and AWS credentials configured you can invoke the following basic commands,

```bash
export AWS_PROFILE=<some-profile>

terraform init
terraform plan
terraform apply
```

Once you're familiar enough with Terraform, please follow the [best practices](https://github.com/ozbillwang/terraform-best-practices). Setting up a remote backend is a must.
