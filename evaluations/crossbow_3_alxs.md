# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/dodorare/crossbow#license | dual MIT/Apache-2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | inline comments, [how-to-create-plugins](https://crossbow.dodorare.com/crossbow/android-plugins.html), [in-app-updates-tutorial](https://crossbow.dodorare.com/tutorials/in-app-updates.html), [play-billing-tutorial](https://crossbow.dodorare.com/tutorials/play-billing.html) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [tests](https://github.com/dodorare/crossbow/blob/v0.2.3/crossbundle/cli/tests/), [integration tests](https://github.com/dodorare/crossbow/blob/v0.2.3/crossbundle/cli/tests/build_gradle.rs), [ci](https://github.com/dodorare/crossbow/blob/v0.2.3/.github/workflows/ci.yml) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [dockerfile](https://github.com/dodorare/crossbow/blob/v0.2.3/.github/docker/crossbundle.Dockerfile), [docker image](https://github.com/dodorare/crossbow/pkgs/container/crossbundle) |
| 1. | Sign in with Google | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/v0.2.3/plugins/play-games-services), [example](https://github.com/dodorare/crossbow/tree/v0.2.3/examples/crossbow-plugins) |
| 2. | Android In-App purchases with Google Play Billing | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/v0.2.3/plugins/play-billing), [example](https://github.com/dodorare/crossbow/tree/v0.2.3/examples/crossbow-plugins) |
| 3. | Support Android In-App updates | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/v0.2.3/plugins/play-core), [example](https://github.com/dodorare/crossbow/tree/v0.2.3/examples/crossbow-plugins) |
| 4. | Support Android In-App billing | <ul><li>[x] </li></ul> | | Google now supports only [Play Billing](https://developer.android.com/google/play/billing) (see above)
| 5. | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/dodorare/cross-platform-build-tools-and-toolkit-for-games-crossbow-announcement-ccd3b674b7c0) |

## General Notes

Showcase app available on the Play Store, code under https://github.com/dodorare/crossbow/tree/main/examples/crossbow-plugins

Good instructions and external documentation for each of the plugins.

I noticed a few regressions: in the installation tool and the `bevy-explorer` example.
These were switfly addressed by the team and IMO are to be expected at this stage of the project.

Only loosely related to Substrate, but an interesting application and the project does showcase basic inegration in the aforementioned example.
