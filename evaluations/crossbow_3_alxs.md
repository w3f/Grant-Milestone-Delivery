# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/dodorare/crossbow#license | dual MIT/Apache-2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | inline comments, [how-to-create-plugins](https://crossbow.dodorare.com/crossbow/android-plugins.html), [in-app-updates-tutorial](https://crossbow.dodorare.com/tutorials/in-app-updates.html), [play-billing-tutorial](https://crossbow.dodorare.com/tutorials/play-billing.html) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [tests](https://github.com/dodorare/crossbow/blob/f07cbbba23731879e2a579a8cb5076aa81883fed/crossbundle/cli/tests/), [integration tests](https://github.com/dodorare/crossbow/blob/f07cbbba23731879e2a579a8cb5076aa81883fed/crossbundle/cli/tests/build_gradle.rs), [ci](https://github.com/dodorare/crossbow/blob/f07cbbba23731879e2a579a8cb5076aa81883fed/.github/workflows/ci.yml) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [dockerfile](https://github.com/dodorare/crossbow/blob/f07cbbba23731879e2a579a8cb5076aa81883fed/.github/docker/crossbundle.Dockerfile), [docker image](https://github.com/dodorare/crossbow/pkgs/container/crossbundle) |
| 1. | Sign in with Google | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/plugins/play-games-services), [example](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/examples/crossbow-plugins) |
| 2. | Android In-App purchases with Google Play Billing | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/plugins/play-billing), [example](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/examples/crossbow-plugins) |
| 3. | Support Android In-App updates | <ul><li>[x] </li></ul> | [crossbow plugin](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/plugins/play-core), [example](https://github.com/dodorare/crossbow/tree/f07cbbba23731879e2a579a8cb5076aa81883fed/examples/crossbow-plugins) |
| 4. | Support Android In-App billing | <ul><li>[x] </li></ul> | | Google now supports only [Play Billing](https://developer.android.com/google/play/billing) (see above)
| 5. | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/dodorare/cross-platform-build-tools-and-toolkit-for-games-crossbow-announcement-ccd3b674b7c0) |

## General Notes

