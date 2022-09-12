# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/dodorare/crossbow/blob/v0.1.7/LICENSE) | Apache License 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docs](https://github.com/dodorare/crossbow/tree/v0.1.7/docs), [plugins](https://github.com/dodorare/crossbow/blob/v0.1.7/docs/src/crossbow/android-plugins.md), [permissions](https://github.com/dodorare/crossbow/blob/v0.1.7/docs/src/crossbow/permissions.md), [installation](https://github.com/dodorare/crossbow/blob/v0.1.7/docs/src/crossbundle/command-install.md), [hosted](https://crossbow.dodorare.com/) | 
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [unit tests](https://github.com/dodorare/crossbow/blob/v0.1.7/crossbundle/cli/tests/), [integration tests](https://github.com/dodorare/crossbow/blob/v0.1.7/crossbundle/cli/tests/build_gradle.rs), [CI runs](https://github.com/dodorare/crossbow/blob/v0.1.7/.github/workflows/ci.yml) | No guide but self-explanatory
| 0d. | Docker | <ul><li>[x] </li></ul> | [dockerfile](https://github.com/dodorare/crossbow/blob/v0.1.7/.github/docker/crossbundle.Dockerfile), [docker image](https://github.com/dodorare/crossbow/pkgs/container/crossbundle), [instructions](https://github.com/dodorare/crossbow/blob/b1c35e43d3335da3932aa9519fd05aee461ea514/docs/other-docker.md) | Fixed
| 1. | Support Android Plugins | <ul><li>[x] </li></ul> |  [tutorial](https://github.com/dodorare/crossbow/blob/v0.1.7/docs/src/crossbow/android-plugins.md), [Crossbow Plugin Management](https://github.com/dodorare/crossbow/tree/v0.1.7/platform/android/java/lib/src/com/crossbow/library/plugin), [Crossbow AdMob Plugin](https://github.com/dodorare/crossbow/tree/v0.1.7/plugins/admob) | for now only admob plugin and implementing more requires using the existing one as a template, but the next milestone comprises mostly a number of other plugins |
| 2. | Support Cross-platform permissions | <ul><li>[x] </li></ul> | [example](https://github.com/dodorare/crossbow/tree/v0.1.7/examples/macroquad-permissions), [implementation](https://github.com/dodorare/crossbow/tree/v0.1.7/src/permission) | Initially not a cross-platform API but two separate ones, also iOS wasn't implemented at all. Team addressed feedback within a day
| 3. | Simple installation of Android SDK and NDK | <ul><li>[x] </li></ul> | [instructions](https://github.com/dodorare/crossbow/blob/v0.1.7/docs/src/crossbundle/command-install.md) | Clarified instructions and fixed an NDK lookup error for tests to pass |


## General Notes

Great documentation and codebase.

Minor issues, altough deliverable 2 in particular just wasn't what the team had promised to deliver.
The permissions API was supposed to be cross-platform but there was no iOS implementation.
However, the team was quick to respond to feedback.

The installation tool seems really quite useful and worked like a charm for the complexity of the task.
