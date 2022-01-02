# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
* **Milestone Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/dodorare/crossbow/blob/main/LICENSE | Apache License 2.0 |
| 0b. | Documentation | https://github.com/dodorare/crossbow/wiki | [wiki page](https://github.com/dodorare/crossbow/wiki), [code documentation](https://github.com/dodorare/crossbow/tree/main/crossbundle) |
| 0c. | Test cases | https://github.com/dodorare/crossbow/tree/main/crossbundle/tools/tests | Key functions are covered by test cases. Run `cargo test` in folder `crossbundle/tools` |
| 0d. | Docker | https://github.com/dodorare/crossbow/blob/main/.github/docker/crossbundle.Dockerfile | |
| 1. | Add aapt2 tool wrapper | https://github.com/dodorare/android-tools-rs/tree/main/src/aapt2 | Used by crossbundle-tools |
| 2. | Add bundletool wrapper | https://github.com/dodorare/android-tools-rs/tree/main/src/bundletool | Used by crossbundle-tools |
| 3. | Support AAB | https://github.com/dodorare/crossbow/blob/main/crossbundle/cli/src/commands/build/android.rs#L155 | Add flag `--aab` when build for `android` |
| 4. | Support Macroquad engine	 | https://github.com/dodorare/crossbow/blob/main/crossbundle/cli/src/commands/build/mod.rs#L56 | Add flag `--quad` when building |
| 5. | Enhance documentation | https://github.com/dodorare/crossbow/tree/main/crossbundle | We added more code comments and enhanced our wiki |
