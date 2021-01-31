# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/46
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/creator-rs/creator/blob/master/LICENSE)| - |
| 1. | Project on iOS | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/ece9d1f84816ef7420533fe35167cb1a5baca6c5/platforms/ios | | | 
| 2. | Working app with Rust code inside | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/wiki/apple | Follow the wiki instructions for the simplest app or else use the examples provided (longer build times) | 
| 3. | Basic app UI, working touch events and storage access | <ul><li>[x] </li></ul> | Paint (touch events): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/paint <br> 2D (Images/Sprites + Audio): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/2d <br> Explorer (UI elements): https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer <br> plist generation tasks: https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/crates/creator-tools/src/types/info_plist | |
| 4. | Substrate inside iOS app | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer/Cargo.toml#L37 | Same example as for Android, works on iOS | 
| 5. | Connection to Substrate network from app | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer/src/explorer.rs#L23 | see previous |
| 6. | Blockchain explorer | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/tree/ed09fd0e0fa86bf5523cc7762fe01126695a3906/examples/explorer | see previous |
| 7. | CI and tests | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/blob/ed09fd0e0fa86bf5523cc7762fe01126695a3906/.github/workflows/ci.yml#L27 | Nice automation tools & working well: https://github.com/creator-rs/creator/actions | 
| 8. | Documentation | <ul><li>[x] </li></ul> | https://github.com/creator-rs/creator/wiki/apple | Great step-by-step tutorial, works out of the box |


## General Notes

The team was accomodating for the fact that I didn't have access to a physical iOS device.
