# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/mobile-game-framework.md
* **Milestone:** 3
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                                                                                       | Accepted               | Link                                                                                                                                                                | Evaluation Notes |
|--------|---------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|     1. | Simple interface of creation of Android and iOS projects                                          | <ul><li>[x] </li></ul> | [Command line tools](https://github.com/creator-rs/creator/wiki/Command-line-tool)                                                                                  |                  |
|     2. | Templates for Android and iOS projects to make it possible to create projects from it in one call | <ul><li>[x] </li></ul> | [creator template](https://github.com/creator-rs/creator-templates)                                                                                                 |                  |
|     3. | CLI and build utilities                                                                           | <ul><li>[x] </li></ul> | [Command line tools](https://github.com/creator-rs/creator/wiki/Command-line-tool)                                                                                  |                  |
|     4. | Support of CD with Fastlane                                                                       | <ul><li>[x] </li></ul> | [fastlane plugin](https://github.com/creator-rs/fastlane-plugin), [fastlane example project](https://github.com/creator-rs/creator-templates/tree/fastlane-example) |                  |
|     5. | Test Substrate network with test data                                                             | <ul><li>[x] </li></ul> | [substrate explorer example](https://github.com/creator-rs/creator/tree/v0.4.1/examples/explorer)                                                                   |                  |
|     6. | Documentation, tutorials and example project                                                      | <ul><li>[x] </li></ul> | [comprehensive wiki](https://github.com/creator-rs/creator/wiki)                                                                                                    |                  |

## General Notes

### Android

Couldn't get the paint example to run properly. The app is installed, but crashes upon opening.

There is a warning(?) generated: `Unknown command: install-incremental`, though the installation proceeds fine.

### iOS

Currently failing, see error logs attached to the PR comments.

### Misc

Excellent effort from the team to demo the project and to try to reproduce the testing environment as closely as possible. I was able to install the iOS apps in the previous milestone and as it's not critical for the deliverables here, I am happy to accept the 3rd milestone as is now.
