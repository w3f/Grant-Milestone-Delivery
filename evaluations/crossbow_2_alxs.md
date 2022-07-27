# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/LICENSE) | Apache License 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [docs](https://github.com/dodorare/crossbow/tree/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs), [plugins](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs/crossbow-plugin.md), [permissions](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs/crossbow-permissions.md), [installation](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs/crossbundle-install-command.md) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [unit tests](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/crossbundle/cli/tests/), [integration tests](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/crossbundle/cli/tests/build_gradle.rs), [CI runs](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/.github/workflows/ci.yml) | No guide but self-explanatory
| 0d. | Docker | <ul><li>[ ] </li></ul> | [dockerfile](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/.github/docker/crossbundle.Dockerfile), [docker image](https://github.com/dodorare/crossbow/pkgs/container/crossbundle), [instructions](https://github.com/dodorare/crossbow/blob/b1c35e43d3335da3932aa9519fd05aee461ea514/docs/other-docker.md) | Initially failed
| 1. | Support Android Plugins | <ul><li>[x] </li></ul> |  [tutorial](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs/crossbow-plugin.md), [Crossbow Plugin Management](https://github.com/dodorare/crossbow/tree/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/platform/android/java/lib/src/com/crossbow/library/plugin), [Crossbow AdMob Plugin](https://github.com/dodorare/crossbow/tree/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/plugins/admob) | for now only really one plugin and "support for pugins" means using the existing one as a template, but the next milestone comprises mostly a number of others |
| 2. | Support Cross-platform permissions | <ul><li>[x] </li></ul> | [Crossbow Permissions usage example](https://github.com/dodorare/crossbow/tree/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/examples/macroquad-permissions), [Crossbow Permissions](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/platform/android/src/permission.rs) | Initially not a cross-platform API but two separate ones, also iOS wasn't implemented at all. Team addressed feedback within a day
| 3. | Simple installation of Android SDK and NDK | <ul><li>[x] </li></ul> | [instructions](https://github.com/dodorare/crossbow/blob/ba2d9a4c3c60ecc3e88b3e13ecdac7e84dbdd19e/docs/crossbundle-install-command.md) | Clarified instructions and fixed an NDK lookup error for tests to pass |


## General Notes

Great documentation and codebase.

Minor issues, altough deliverable 2 in particular just wasn't what the team had promised to deliver.
The permissions API was supposed to be cross-platform but there was simply no iOS implementation.
However, the team was quick to respond to feedback.
