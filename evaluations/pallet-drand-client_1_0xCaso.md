# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/pallet-drand-client.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/random-meat/drand-substrate-client/blob/379df830f4cd05a8e79d729848986df40333952f/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/random-meat/drand-substrate-client/blob/379df830f4cd05a8e79d729848986df40333952f/README.md) |  |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | - | See **General Notes** |
| 1. | drand substrate client | <ul><li>[ ] </li></ul> | [drand-substrate-client](https://github.com/random-meat/drand-substrate-client) | See **General Notes** |
<br/>

## General Notes v1 - Jan 17, 2023

For the delivery, I have the following comments/questions (note: I didn't test the functionality in a runtime yet):
- To compile the code, I had to add `#![feature(format_args_capture)]` on top of the source, is it normal?
- The coverage is 57/89 = 64%, is it improvable?
- It would be nice to provide a minimal setup (`substrate-contract-node`) with a pallet that uses the library, so testing it in runtime would be super straightforward (it would be enough to just have the callable function to get the random number); if this is too much, then something like a tutorial to test and integrate it (like provided code to copy/paste in the project, ecc.).