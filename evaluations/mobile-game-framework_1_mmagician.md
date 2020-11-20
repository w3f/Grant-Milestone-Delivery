# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/46
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/emeraldpay/polkaj/blob/master/LICENSE)| - |
| 1. | Project on Android | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/ece9d1f84816ef7420533fe35167cb1a5baca6c5/platforms/android | 
| 2. | Working app with Rust code inside | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/3d | 
| 3. | Basic app UI, working touch events and storage access | <ul><li>[x] </li></ul> | Paint (touch events): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/paint <br> 2D (Images/Sprites + Audio): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/2d <br> Explorer (UI elements): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer <br> Some PRs: [assets](https://github.com/bevyengine/bevy/pull/723), [textures fix](https://github.com/bevyengine/bevy/pull/675), [audio](https://github.com/RustAudio/cpal/pull/491), [etc](https://github.com/bevyengine/bevy/issues/86) | 
| 4. | Substrate inside Android app | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer/Cargo.toml#L10 |
| 5. | Connection to Substrate network from app | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer/src/explorer.rs#L22 |
| 6. | Blockchain explorer | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer |
| 7. | CI and tests | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/.github/workflows https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/.github/docker/android.Dockerfile | 
| 8. | Documentation | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/wiki |

## General Notes

There were a few small issues with the docker setup, although promptly resolved by the team.
Documentation at this stage includes only the setup & install, but that's ok since Milestone 3 deals primarily with this.
