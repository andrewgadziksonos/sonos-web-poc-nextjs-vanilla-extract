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
