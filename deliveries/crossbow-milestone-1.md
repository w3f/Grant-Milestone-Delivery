# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
* **Milestone Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/dodorare/crossbow/tree/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/LICENSE | Apache License 2.0 |
| 0b. | Documentation | https://github.com/dodorare/crossbow/tree/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/docs | [docs](https://github.com/dodorare/crossbow/tree/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/docs), [code documentation](https://github.com/dodorare/crossbow/tree/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/crossbundle), [test guide](https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/docs/testing-guide.md) |
| 0c. | Test cases | https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/crossbundle/tools/tests | Key functions are covered by test cases. Run `cargo test` in folder `crossbundle/tools`. [Testing guide](https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/docs/testing-guide.md) |
| 0d. | Docker | https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/.github/docker/crossbundle.Dockerfile | |
| 1. | Add aapt2 tool wrapper | https://github.com/dodorare/android-tools-rs/tree/8059889555491c2a8a6a8ad0025ee8f02dd4db63/src/aapt2 | Used by crossbundle-tools |
| 2. | Add bundletool wrapper | https://github.com/dodorare/android-tools-rs/tree/8059889555491c2a8a6a8ad0025ee8f02dd4db63/src/bundletool | Used by crossbundle-tools |
| 3. | Support AAB | https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/crossbundle/cli/src/commands/build/android.rs#L155 | Add flag `--aab` when build for `android` |
| 4. | Support Macroquad engine	 | https://github.com/dodorare/crossbow/blob/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/crossbundle/cli/src/commands/build/mod.rs#L56 | Add flag `--quad` when building |
| 5. | Enhance documentation | https://github.com/dodorare/crossbow/tree/7da4f92d7b1cc0ad2fbf6ed7f4765d8c473ac04e/crossbundle | We added more code comments and enhanced our wiki |
