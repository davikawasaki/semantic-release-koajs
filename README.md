[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Actions Dev](https://github.com/davikawasaki/semantic-release-koajs/workflows/Release%20Dev/badge.svg)
![Actions QA](https://github.com/davikawasaki/semantic-release-koajs/workflows/Release%20QA/badge.svg)
![Actions Production](https://github.com/davikawasaki/semantic-release-koajs/workflows/Release%20Prod/badge.svg)

# Semantic Release Example Project

> :warning: For this project is necessary to be use node version >=14.

Semantic release example project on a KoaJS API.

## Contributing

:boom: In case you are making a commit for this package repository, **MAKE SURE TO READ AND UNDERSTAND THE FOLLOWING TOPICS**:

1\. Every commit that runs on the main branch runs through a pipeline workflow on Github Actions. So **be sure to check if your code is well written and linted** – if you don't have it linted, it'll be done by a git hook layer that transforms data according to some scripts at the `.husky` folder

2\. If the commit passes through the pipeline workflow, the module will be released as a package in the Github Packages Registry. This workflow uses a [semantic release package](https://github.com/semantic-release/semantic-release) that **increments/bumps the version from the latest release based on commit messages** and from `commitlint.config.js` and `.releaserc.json` files at the root level. The first file decides which prefixes are accepted by the `commitlint`, whilst the second determines a key-value pair map between a release and a commit type (example below):

```json
{
  "branches": [
    { "name": "main", "prerelease": "dev" },
    { "name": "staging", "prerelease": "qa" },
    { "name": "prod" }
  ],
  "plugins": [
    ["@semantic-release/commit-analyzer",
    {
      "preset": "conventionalcommits",
      "releaseRules": [
        {"type": "major", "release": "major"},
        {"type": "MAJOR", "release": "major"},
        {"type": "breaking-change", "release": "major"},
        {"type": "BREAKING-CHANGE", "release": "major"},
        {"type": "minor", "release": "minor"},
        {"type": "MINOR", "release": "minor"},
        {"type": "patch", "release": "patch"},
        {"type": "feat", "release": "minor"},
        {"type": "FEAT", "release": "minor"},
        {"type": "chore", "release": false},
        {"type": "build", "release": false},
        {"type": "ci", "release": false},
        {"type": "fix", "release": "patch"},
        {"type": "perf", "release": "patch"},
        {"type": "style", "release": "patch"},
        {"type": "test", "release": "patch"},
        {"type": "docs", "release": false},
        {"type": "refactor", "release": "minor"},
        {"type": "REFACTOR", "release": "minor"},
        {"type": "revert", "release": "patch"},
        {"scope": "no-release", "release": false}
      ]
    }]
    ...
  ]
}
```

3\. Furthermore, the workflow has also an underlying command that deploys automatically a new release when a success test/deployment takes places. These releases can be found [here](https://github.com/davikawasaki/semantic-release-koajs/releases).
