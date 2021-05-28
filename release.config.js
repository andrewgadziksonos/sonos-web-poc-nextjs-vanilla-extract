const baseConfig = require("@sonos-inc/semantic-release")

module.exports = {
  ...baseConfig,
  branches: [...baseConfig.branches, { name: "dev", prelease: "dev" }],
}
