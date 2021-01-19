# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/46 
* **Milestone Number:** 2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| # | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Project on iOS | https://github.com/creator-rs/creator/tree/ece9d1f84816ef7420533fe35167cb1a5baca6c5/platforms/ios | Obsolete one. We decided to proceed with [binary generation](https://medium.com/@vojtastavik/building-an-ios-app-without-xcodes-build-system-d3e5ca86d30d) and possibly additional [xcodeproj generation](https://github.com/creator-rs/creator/issues/12) in the near future
| 2. | Working app with Rust code inside | https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/3d | Basic app with 3D scene written in Rust and built with [Xcode command line tools](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)
| 3. | Basic app UI, working touch events and storage access | Paint (touch events): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/paint <br> 2D (Images/Sprites + Audio): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/2d <br> Explorer (UI elements): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer <br> Some PRs: [assets](https://github.com/bevyengine/bevy/pull/723), [textures fix](https://github.com/bevyengine/bevy/pull/675), [audio](https://github.com/RustAudio/cpal/pull/491), [etc](https://github.com/bevyengine/bevy/issues/86) | Main issue was is to fix shaders runtime translation.
| 4. | Substrate inside iOS app | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer/Cargo.toml#L37 |
| 5. | Connection to Substrate network from app | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer/src/explorer.rs#L23 |
| 6. | Blockchain explorer | https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer |
| 7. | CI and tests | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/.github/workflows/ci.yml#L27 | Automatization of format and clippy checks, build iOS app, auto Github releases with uploading `cargo-creator` binaries to artifacts
| 8. | Documentation | https://github.com/creator-rs/creator/wiki/apple |
