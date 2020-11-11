# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/46 
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| # | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Project on Android | https://github.com/creator-rs/creator/tree/ece9d1f84816ef7420533fe35167cb1a5baca6c5/platforms/android | Obsolete one. We decided to proceed with [NativeActivity](https://developer.android.com/reference/android/app/NativeActivity)
| 2. | Working app with Rust code inside | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/3d | Basic app with 3D scene written in Rust and built with [NDK](https://developer.android.com/ndk/guides)
| 3. | Basic app UI, working touch events and storage access | Paint (touch events): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/paint <br> 2D (Images/Sprites + Audio): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/2d <br> Explorer (UI elements): https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer <br> Some PRs: [assets](https://github.com/bevyengine/bevy/pull/723), [textures fix](https://github.com/bevyengine/bevy/pull/675), [audio](https://github.com/RustAudio/cpal/pull/491), [etc](https://github.com/bevyengine/bevy/issues/86) | Main issue was is to fix shaders runtime translation.
| 4. | Substrate inside Android app | https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer/Cargo.toml#L10 |
| 5. | Connection to Substrate network from app | https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer/src/explorer.rs#L22 |
| 6. | Blockchain explorer | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/examples/explorer |
| 7. | CI and tests | https://github.com/creator-rs/creator/tree/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/.github/workflows https://github.com/creator-rs/creator/blob/cb7a7b79fd19fc04f43a9f40e2d9f2ef8f2ed428/.github/docker/android.Dockerfile | Automatization of format and clippy checks, build APKs, auto Github releases with uploading `cargo-creator` binaries with APKs to artifacts, Docker image build. It's hard to write integration tests for Android so we did more for CI and Docker
| 8. | Documentation | https://github.com/creator-rs/creator/wiki |
