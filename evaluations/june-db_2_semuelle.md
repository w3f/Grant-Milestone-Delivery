# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/JuniDB.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [uddugteam/substrate](https://github.com/uddugteam/substrate/blob/ca23cb6692cbf2eddc07c288ef0b823d0d2a046a/LICENSE-GPL3) | GNU GPL v3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [uddugteam/offchain-ipfs-manual](https://github.com/uddugteam/offchain-ipfs-manual/tree/7e156c7cfb4ba262572643b030cce8a19afc502b) | Fork of https://github.com/rs-ipfs/offchain-ipfs-manual without modifications. At least a description of the changes and adaptation of links would be nice. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [uddugteam/offchain-ipfs-manual](https://github.com/uddugteam/offchain-ipfs-manual/blob/7e156c7cfb4ba262572643b030cce8a19afc502b/src/offchain-ipfs-rust.md) | see [General Notes](#general-notes) |
| 0d. | Article | <ul><li>[x] </li></ul> | [docs.google.com](https://docs.google.com/document/d/1k6DhCfSs7rmsSV-WB7o8EkvqDFz5Bvn12QYrjjW7R2w/edit) | M1 & M2 in one article |
| 1. | Update [offchain::ipfs](https://github.com/rs-ipfs/substrate) | <ul><li>[x] </li></ul> | [rs-ipfs/substrate](https://github.com/rs-ipfs/substrate/pull/5#issuecomment-956168803) | `rs-ipfs/substrate` is inactive, now references `uddugteam/substrate` |
| 2. | Docker image | <ul><li>[ ] </li></ul> | [hub.docker.com](https://hub.docker.com/repository/docker/andskur/substrate-offchain-ipfs) | see [General Notes](#general-notes) |


## General Notes

- 0c (Testing Guide) doesn't contain any of the promised features:
  - "Complex quality assurance for all platform features"
  - "Core functions will be fully covered by unit tests to ensure functionality and robustness."
  - "In the guide, we will describe how to run these tests."
- rs-ipfs repository now points to uddugteam's: https://github.com/rs-ipfs/substrate/blob/3d0f293c3abb624ec170edc40a20669f848ee8ea/README.md?plain=1#L6
- Pulling docker image from DockerHub fails because the URL is wrong in the delivery, the documentation AND the article.
- The article references a `docker run` command that isn't there.
- Pulling and `run`ning `andskur/substrate-offchain-ipfs:latest` results in: `Error: Input("Please specify which chain you want to run, e.g. --dev or -chain=local")`

