module.exports = {
  "branches": ['master', { name: 'development', prerelease: 'beta' }],
  "repositoryUrl": "https://github.com/prashant9428/semantic-versioning",
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    ["@semantic-release/npm", {
      "pkgRoot": "server",
      "npmPublish": false,
    }],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ]]
}