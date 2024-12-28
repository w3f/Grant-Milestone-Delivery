# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project.
* **Milestone Number:** 1

**Deliverables**
| Number | Deliverable            | Link                                                                                                                                                                                       | Notes |
| -----: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
|    0a. | License                | [GPL-3.0](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/LICENSE) and [GPL-3.0](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/LICENSE)         |       |
|    0b. | Documentation          | [README.md](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/README.md) and [README.md](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/README.md) |       |
|    0c. | Testing guide          | Please check the "Additional Information" section below in this document                                                                                                                   |       |
|     1. | Docker image           | [Source](https://github.com/hack-ink/polkadot-runtime-releaser/tree/main/docker) and [pre-built](https://ghcr.io/hack-ink/polkadot-runtime-releaser)                                       |       |
|     2. | Try-Runtime CI         | [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/action/try-runtime)                                                                                        |       |
|     3. | Release CI             | [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/.github/workflows/release.yml)                                                                    |       |
|     4. | WASM override tool     | [Source](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/cli/src/cli/build.rs) and for the release please check at NO.7 in this table                                      |       |
|     5. | WASM override CI       | [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/action/override)                                                                                           |       |
|     6. | WASM info inspect tool | [Source](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/cli/src/cli/inspect.rs) and for the release please check at NO.7 in this table                                    |       |
|     7. | Releases               | [GitHub](https://github.com/hack-ink/polkadot-runtime-releaser/releases) and [crates.io](https://crates.io/crates/polkadot-runtime-releaser-cli)                                           |       |
|     8. | Workshop               | [GitHub repository](https://github.com/hack-ink/polkadot-runtime-releaser-workshop)                                                                                                        |       |

**Additional Information**

Testing Guide:
- Unit test
  ```sh
  # Make sure you have Git and Rust installed.
  git clone https://github.com/hack-ink/polkadot-runtime-releaser.git
  cd polkadot-runtime-releaser
  cargo test
  ```
  If you cannot set up the test environment on your local machine, you can also check the GitHub Action.
  I have already set up the [Clippy](https://github.com/hack-ink/polkadot-runtime-releaser/actions/runs/12524880278/job/34935843642) test and the [General](https://github.com/hack-ink/polkadot-runtime-releaser/actions/runs/12524880278/job/34935843771) test in GitHub Action.
- Integration test

  I will not elaborate on the details here, since the goal of this project is to enable the team to easily set up the release pipeline.
  Please check the ["Setup Guide"](https://github.com/hack-ink/polkadot-runtime-releaser?tab=readme-ov-file#setup-guide) section.
  I think every step and `action.yml` is well documented. If you encounter any issues, please let me know!

  If the test is successful, you will see the such similar output:
  - [Polkadot Runtime](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/tree/polkadot-runtime)
  - [Staging Kusama Runtime](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/tree/staging-kusama-runtime)
  - [Try-Runtime](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/pull/3)
  - [Release `v0.0.1`](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/releases/tag/v0.0.1)
